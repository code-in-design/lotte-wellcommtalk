import {Count} from '@/api/api.types';
import {
  createPost,
  deleteImage,
  deletePost,
  getPostDetail,
  getPosts,
  getPostsCount,
} from '@/api/post/post';
import {Post} from '@/api/post/post.types';
import {DESKTOP_PAGE_SIZE, MOBILE_PAGE_SIZE} from '@/common/constants';
import {getFilenameFromImageUrl} from '@/common/utils/getFilename';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';

const key = 'posts';

interface UseGetPostParams {
  page: number;
  isDesktop: boolean;
}

export const useGetPosts = ({page, isDesktop}: UseGetPostParams) => {
  const offset = isDesktop
    ? (page - 1) * DESKTOP_PAGE_SIZE
    : (page - 1) * MOBILE_PAGE_SIZE;
  const limit = isDesktop ? DESKTOP_PAGE_SIZE : MOBILE_PAGE_SIZE;
  return useQuery([key, page], () => getPosts({offset, limit}), {
    initialData: [] as Post[],
  });
};

export const useGetPostsCount = () => {
  return useQuery([key, 'count'], getPostsCount, {
    initialData: {
      count: 0,
    },
  });
};

export const useGetPostDetail = (postId: string) => {
  return useQuery([key, postId], () => getPostDetail(postId));
};

interface UseCreatePostParams extends IsDesktop {
  onAfterWrite: () => void;
}

export const useCreatePost = ({
  onAfterWrite,
  isDesktop,
}: UseCreatePostParams) => {
  const queryCliet = useQueryClient();

  return useMutation(createPost, {
    onSuccess: ({id}, bodyData) => {
      onAfterWrite();

      queryCliet.setQueryData<Post[]>([key, 1], oldPosts => {
        if (!oldPosts) return [];

        const pageLength = isDesktop ? DESKTOP_PAGE_SIZE : MOBILE_PAGE_SIZE;
        const popedPosts =
          oldPosts.length === pageLength
            ? oldPosts.filter((_, i) =>
                i === oldPosts.length - 1 ? false : true,
              )
            : oldPosts;

        const newPost: Post = {
          id,
          createdAt: {
            _seconds: Math.floor(Date.now() / 1000),
            _nanoseconds: 0,
          },
          ...bodyData,
        };

        return [newPost, ...popedPosts];
      });
    },
  });
};

export const useDeletePost = (page: number) => {
  const queryClient = useQueryClient();

  return useMutation(deletePost, {
    onSuccess: (_, postId) => {
      const oldPosts = queryClient.getQueryData<Post[]>([key, page]);
      const deletedPost = oldPosts?.find(oldPost => oldPost.id === postId);
      if (!deletedPost) return [];

      for (const imageUrl of deletedPost.imageUrls) {
        const filename = getFilenameFromImageUrl(imageUrl);
        if (!filename) return [];
        deleteImage(filename);
      }

      queryClient.setQueryData<Post[]>([key, page], oldPosts => {
        if (!oldPosts) return [];

        return oldPosts.filter(post => post.id !== postId);
      });

      queryClient.setQueryData<Count>([key, 'count'], oldData => {
        if (!oldData) return {count: 0};

        return {count: oldData.count - 1};
      });
    },
  });
};
