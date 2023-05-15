import {db, storage} from '@/lib/firebase';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getCount,
  getDoc,
  serverTimestamp,
} from 'firebase/firestore/lite';
import {ref, uploadBytes, getDownloadURL, deleteObject} from 'firebase/storage';
import {v4 as uuidV4} from 'uuid';
import {client} from '../api';
import {CreatePostParams, GetPostsParams, Post} from './post.types';

const postsCollection = collection(db, 'posts');

export const getPosts = async ({offset, limit}: GetPostsParams) => {
  const {data} = await client.get<Post[]>('/posts', {
    params: {offset, limit},
  });
  return data;
};

export const getPostsCount = async () => {
  const querySnapshot = await getCount(postsCollection);
  return querySnapshot.data();
};

export const getPostDetail = async (postId: string) => {
  const docRef = doc(db, 'posts', postId);
  const docSnapshot = await getDoc(docRef);
  return docSnapshot.data() as Post;
};

export const createPost = async (params: CreatePostParams) => {
  const {id} = await addDoc(postsCollection, {
    ...params,
    createdAt: serverTimestamp(),
  });
  return {id};
};

export const uploadImage = async (file: File) => {
  const ext = file.name.split('.').pop();
  const storageRef = ref(storage, `/images/${uuidV4()}.${ext}`);

  const result = await uploadBytes(storageRef, file);
  const url = await getDownloadURL(result.ref);

  return url;
};

export const deletePost = async (postId: string) => {
  const docRef = doc(db, 'posts', postId);
  await deleteDoc(docRef);
};

export const deleteImage = async (filename: string) => {
  const storageRef = ref(storage, `/images/${filename}`);
  await deleteObject(storageRef);
};
