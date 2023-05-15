import type {NextApiRequest, NextApiResponse} from 'next';
import {doc, getDoc, updateDoc} from 'firebase/firestore/lite';
import {db} from '@/lib/firebase';
import {SubmitQuizParams} from '@/api/quiz/quiz.types';
import {User} from '@/api/user/user.types';

const ANSWER = '웰니스';

interface ExtendedNextApiRequest extends NextApiRequest {
  body: SubmitQuizParams;
}

export default async function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') return;
  const {userId, content} = req.body;

  const isCorrect = content === ANSWER;
  const correct = content === ANSWER ? '정답' : '오답';

  const docRef = doc(db, 'users', userId);
  const querySnapshot = await getDoc(docRef);
  const user = querySnapshot.data() as User;
  if (!user) {
    res.status(400).send('Bad Request');
  }

  if (user.correct === '정답') {
    return res.status(200).json({isCorrect});
  }

  await updateDoc(docRef, {correct});

  res.status(200).json({isCorrect});
}
