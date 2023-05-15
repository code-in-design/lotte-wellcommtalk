import {Count} from '@/api/api.types';
import {
  createCheeringMessage,
  deleteCheeringMessage,
  getCheeringMessages,
  getCheeringMessagesCount,
} from '@/api/cheeringMessage/cheeringMessage';
import {CheeringMessage} from '@/api/cheeringMessage/cheeringMessage.types';
import {CheeringFormValue} from '@/components/Section5/CheeringMessageForm/CheeringMessageFom';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {UseFormResetField} from 'react-hook-form';

const key = 'cheeringMessage';

export const useGetCheeringMessages = (page: number) => {
  return useQuery([key, page], () => getCheeringMessages(page), {
    initialData: [] as CheeringMessage[],
  });
};

export const useGetCheeringMessagesCount = () => {
  return useQuery([key, 'count'], getCheeringMessagesCount, {
    initialData: {
      count: 0,
    },
  });
};

export const useCreateCheeringMessage = (
  resetField: UseFormResetField<CheeringFormValue>,
) => {
  const queryCliet = useQueryClient();

  return useMutation(createCheeringMessage, {
    onSuccess: ({id}, bodyData) => {
      queryCliet.setQueryData<CheeringMessage[]>([key, 1], oldMessages => {
        if (!oldMessages) return [];

        const popedOldMessages =
          oldMessages.length === 5
            ? oldMessages.filter((_, i) =>
                i === oldMessages.length - 1 ? false : true,
              )
            : oldMessages;

        const newMessage: CheeringMessage = {
          id,
          createdAt: {
            _seconds: Math.floor(Date.now() / 1000),
            _nanoseconds: 0,
          },
          ...bodyData,
        };

        resetField('content');
        alert('응원 메세지 등록이 완료되었습니다');

        return [newMessage, ...popedOldMessages];
      });
    },
  });
};

export const useDeleteCheeringMessage = (page: number) => {
  const queryClient = useQueryClient();

  return useMutation(deleteCheeringMessage, {
    onSuccess: (_, messageId) => {
      queryClient.setQueryData<CheeringMessage[]>([key, page], oldMessages => {
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
