import type {NextApiRequest, NextApiResponse} from 'next';
import {firestoreAdmin} from '@/lib/firebaseAdmin';
import {CheeringMessage} from '@/api/cheeringMessage/cheeringMessage.types';

type PageQuery = {
  page: string;
};

interface ExtendedNextApiRequest extends NextApiRequest {
  query: PageQuery;
}

const PAGE_SIZE = 5;

export default async function handler(req: ExtendedNextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return;

  const page = +req.query.page;
  if (isNaN(page) || page <= 0) {
    return res.status(400).send('Bad Request');
  }

  const cheeringMessagesCollection = firestoreAdmin.collection('cheeringMessages');

  const querySnapshot = await cheeringMessagesCollection
    .orderBy('createdAt', 'desc')
    .offset((+page - 1) * PAGE_SIZE)
    .limit(PAGE_SIZE)
    .get();

  const data = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as CheeringMessage[];

  res.status(200).json(data);
}
