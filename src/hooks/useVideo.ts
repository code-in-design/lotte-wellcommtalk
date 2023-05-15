import {getVideo} from '@/api/video/video';
import {useQuery} from '@tanstack/react-query';

export const useGetVideo = () => {
  return useQuery(['video'], getVideo);
};
