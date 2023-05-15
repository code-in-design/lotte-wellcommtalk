import type {NextApiRequest, NextApiResponse} from 'next';
import {collection, getDocs, query, where} from 'firebase/firestore/lite';
import {decrypt} from '@/common/utils/crypto';
import {UserWithoutId} from '@/api/user/user.types';
import {db} from '@/lib/firebase';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') return;
  const {employeeNumber} = req.query;

  const usersCollection = collection(db, 'users');

  const q = query(
    usersCollection,
    where('employeeNumber', '==', employeeNumber),
  );
  const querySnapshot = await getDocs(q);
  const doc = querySnapshot.docs[0];
  if (!doc) {
    return res.status(400).send({message: '통합 사번이 존재하지 않습니다.'});
  }

  const encrytedUser = doc.data() as UserWithoutId;
  const decryptedUserName = decrypt(encrytedUser.name);

  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.status(200).send(decryptedUserName);
}
