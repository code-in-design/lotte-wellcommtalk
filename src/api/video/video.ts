import {db} from '@/lib/firebase';
import {collection, getDocs} from 'firebase/firestore/lite';
import {IVideo} from './video.types';

const videoCollection = collection(db, 'video');

export const getVideo = async () => {
  const querySnapshot = await getDocs(videoCollection);
  const video = querySnapshot.docs[0].data() as IVideo;
  return video;
};
