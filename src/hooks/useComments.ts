import {Count} from '@/api/api.types';
import {
  createComment,
  deleteComment,
  getComments,
  getCommentsCount,
} from '@/api/comment/comment';
import {IComment} from '@/api/comment/comment.types';
import {CheeringFormValue} from '@/components/Section2/CommentForm/CommentForm';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {UseFormResetField} from 'react-hook-form';

const key = 'comments';

export const useGetComments = (page: number) => {
  return useQuery([key, page], () => getComments(page), {
    initialData: [] as IComment[],
  });
};

export const useGetCommentCount = () => {
  return useQuery([key, 'count'], getCommentsCount, {
    initialData: {
      count: 0,
    },
  });
};

export const useCreateComment = (
  resetField: UseFormResetField<CheeringFormValue>,
) => {
  const queryCliet = useQueryClient();

  return useMutation(createComment, {
    onSuccess: ({id}, bodyData) => {
      queryCliet.setQueryData<IComment[]>([key, 1], oldComments => {
        if (!oldComments) return [];

        const popedOldComments =
          oldComments.length === 5
            ? oldComments.filter((_, i) =>
                i === oldComments.length - 1 ? false : true,
              )
            : oldComments;

        const newComment: IComment = {
          id,
          createdAt: {
            _seconds: Math.floor(Date.now() / 1000),
            _nanoseconds: 0,
          },
          ...bodyData,
        };

        resetField('content');
        alert('댓글 등록이 완료되었습니다');

        return [newComment, ...popedOldComments];
      });
    },
  });
};

export const useDeleteComment = (page: number) => {
  const queryClient = useQueryClient();

  return useMutation(deleteComment, {
    onSuccess: (_, messageId) => {
      queryClient.setQueryData<IComment[]>([key, page], oldMessages => {
        if (!oldMessages) return [];

        return oldMessages.filter(message => message.id !== messageId);
      });

      queryClient.setQueryData<Count>([key, 'count'], oldData => {
        if (!oldData) return {count: 0};

        return {count: oldData.count - 1};
      });
    },
  });
};
