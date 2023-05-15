import {
  collection,
  addDoc,
  serverTimestamp,
  getCount,
  doc,
  deleteDoc,
} from 'firebase/firestore/lite';
import {db} from '@/lib/firebase';
import {IComment, CreateCommentParams} from './comment.types';
import {client} from '../api';
import {decrypt, encrypt} from '@/common/utils/crypto';

const commentsCollection = collection(db, 'comments');

export const getComments = async (page: number) => {
  const {data} = await client.get<IComment[]>('/comments', {
    params: {
      page,
    },
  });
  return data.map(comment => ({
    ...comment,
    user: {
      ...comment.user,
      name: decrypt(comment.user.name),
    },
  }));
};

export const getCommentsCount = async () => {
  const querySnapshot = await getCount(commentsCollection);
  return querySnapshot.data();
};

export const createComment = async ({content, user}: CreateCommentParams) => {
  const {id} = await addDoc(commentsCollection, {
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

export const deleteComment = async (commentId: string) => {
  const docRef = doc(db, 'comments', commentId);
  await deleteDoc(docRef);
};
