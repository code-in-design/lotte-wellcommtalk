import type {NextApiRequest, NextApiResponse} from 'next';
import {collection, getDocs, query, where} from 'firebase/firestore/lite';
import {decrypt} from '@/common/utils/crypto';
import {LoginParams, UserWithoutId} from '@/api/user/user.types';
import {db} from '@/lib/firebase';

interface ExtendedNextApiRequest extends NextApiRequest {
  body: LoginParams;
}

export default async function handler(req: ExtendedNextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return;
  const {name, employeeNumber} = req.body;

  const usersCollection = collection(db, 'users');

  const q = query(usersCollection, where('employeeNumber', '==', employeeNumber));
  const querySnapshot = await getDocs(q);
  const doc = querySnapshot.docs[0];
  if (!doc) {
    return res.status(400).send({message: '통합 사번이 존재하지 않습니다.'});
  }

  const encrytedUser = doc.data() as UserWithoutId;
  const user = {
    ...encrytedUser,
    name: decrypt(encrytedUser.name),
  };
  if (user.name !== name) {
    return res.status(400).send({message: '이름 또는 통합 사번이 잘못되었습니다.'});
  }

  res.status(200).json({id: doc.id, ...user});
}
