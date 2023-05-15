import type {NextApiRequest, NextApiResponse} from 'next';
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore/lite';
import {encrypt} from '@/common/utils/crypto';
import {JoinParams} from '@/api/user/user.types';
import {db} from '@/lib/firebase';

interface ExtendedNextApiRequest extends NextApiRequest {
  body: JoinParams;
}

export default async function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') return;
  const {name, employeeNumber} = req.body;

  const usersCollection = collection(db, 'users');

  const q = query(
    usersCollection,
    where('employeeNumber', '==', employeeNumber),
  );
  const querySnapshot = await getDocs(q);
  const doc = querySnapshot.docs[0];
  if (doc) {
    return res.status(400).send({message: '이미 존재하는 통합사번입니다.'});
  }

  await addDoc(usersCollection, {
    name: encrypt(name),
    employeeNumber: employeeNumber.toString(),
  });

  res.status(200).send('ok');
}
