import type {NextApiRequest, NextApiResponse} from 'next';
import xlsx from 'xlsx';
import path from 'path';
import {collection, addDoc, getCount} from 'firebase/firestore/lite';
import {db} from '@/lib/firebase';
import {encrypt} from '@/common/utils/crypto';

interface ExcelUser {
  name: string;
  employeeNumber: number | string;
}

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  const usersCollection = collection(db, 'users');
  const querySnapshot = await getCount(usersCollection);
  const {count} = querySnapshot.data();
  if (count !== 0) {
    return res.status(200).send('Already Initialization');
  }

  const filePath = path.join(process.cwd(), '/public/assets/event.xlsx');
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const firstSheet = workbook.Sheets[sheetName];
  const users: ExcelUser[] = xlsx.utils.sheet_to_json(firstSheet);

  const encryptedUsers = users.map(user => ({
    name: encrypt(user.name),
    employeeNumber: user.employeeNumber.toString(),
  }));

  for (const encryptedUser of encryptedUsers) {
    try {
      await addDoc(usersCollection, encryptedUser);
    } catch (err) {
      console.error(err);
    }
  }

  res.status(201).send('Initialization Success');
}
