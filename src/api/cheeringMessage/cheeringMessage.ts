import {
  collection,
  addDoc,
  serverTimestamp,
  getCount,
  doc,
  deleteDoc,
} from 'firebase/firestore/lite';
import {db} from '@/lib/firebase';
import {
  CheeringMessage,
  CreateCheeringMessageParams,
} from './cheeringMessage.types';
import {client} from '../api';
import {decrypt, encrypt} from '@/common/utils/crypto';

const cheeringMessagesCollection = collection(db, 'cheeringMessages');

export const getCheeringMessages = async (page: number) => {
  const {data} = await client.get<CheeringMessage[]>('/messages', {
    params: {
      page,
    },
  });
  return data.map(message => ({
    ...message,
    user: {
      ...message.user,
      name: decrypt(message.user.name),
    },
  }));
};

export const getCheeringMessagesCount = async () => {
  const querySnapshot = await getCount(cheeringMessagesCollection);
  return querySnapshot.data();
};

export const createCheeringMessage = async ({
  content,
  user,
}: CreateCheeringMessageParams) => {
  const {id} = await addDoc(cheeringMessagesCollection, {
    content,
    user: {
      id: user.id,
      name: encrypt(user.name),
      employeeNumber: user.employeeNumber,
    },
    createdAt: serverTimestamp(),
  });
  return {id};
};

export const deleteCheeringMessage = async (messageId: string) => {
  const docRef = doc(db, 'cheeringMessages', messageId);
  await deleteDoc(docRef);
};
