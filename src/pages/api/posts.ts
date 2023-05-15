import type {NextApiRequest, NextApiResponse} from 'next';
import {firestoreAdmin} from '@/lib/firebaseAdmin';
import {IComment} from '@/api/comment/comment.types';

type PageQuery = {
  offset: string;
  limit: string;
};

interface ExtendedNextApiRequest extends NextApiRequest {
  query: PageQuery;
}

export default async function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') return;

  const offset = +req.query.offset;
  const limit = +req.query.limit;
  if (isNaN(offset) || isNaN(limit)) {
    return res.status(400).send('Bad Request');
  }

  const postsCollection = firestoreAdmin.collection('posts');

  const querySnapshot = await postsCollection
    .orderBy('createdAt', 'desc')
    .offset(offset)
    .limit(limit)
    .get();

  const data = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as IComment[];

  res.status(200).json(data);
}
