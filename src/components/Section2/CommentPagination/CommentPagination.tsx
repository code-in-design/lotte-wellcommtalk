import Pagination from '@/components/Pagination/Pagination';
import React, {useCallback, useMemo, useState} from 'react';
import {
  MessageContainer,
  MessageDesktopBlock,
  MessageInnerContainer,
  MessageInnerContainerLoading,
  MessageMobileBlock,
  VerticalBar,
} from './CommentPagination.styles';
import {
  useDeleteComment,
  useGetComments,
  useGetCommentCount,
} from '@/hooks/useCommentMessage';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import {formatDate} from '@/common/utils/formatDate';
import Image from 'next/image';
import {useRecoilValue} from 'recoil';
import {userState} from '@/atoms/user';

dayjs.locale('ko');

const CheeringMessagePagination = ({isDesktop}: IsDesktop) => {
  const [currentPage, setCurrentPage] = useState(1);
  const user = useRecoilValue(userState);

  const {data, isFetching} = useGetComments(currentPage);
  const {
    data: {count},
  } = useGetCommentCount();
  const totalPages = useMemo(() => Math.ceil(count / 5), [count]);

  const {mutate: deleteMessage} = useDeleteComment(currentPage);

  const onRemove = useCallback(
    (messageId: string) => () => {
      const isConfirm = confirm('댓글을 삭제하시겠습니까?');
      if (!isConfirm) return;

      deleteMessage(messageId);
    },
    [deleteMessage],
  );

  if (!user) {
    return null;
  }

  return (
    <MessageContainer isDesktop={isDesktop}>
      {isFetching ? (
        <MessageInnerContainerLoading isDesktop={isDesktop} />
      ) : (
        <MessageInnerContainer isDesktop={isDesktop}>
          {data.map(cheeringMessage => {
            if (isDesktop) {
              return (
                <MessageDesktopBlock key={cheeringMessage.id}>
                  <p>{cheeringMessage.content}</p>

                  <VerticalBar isDesktop={true} />
                  <span>{formatDate(cheeringMessage.createdAt._seconds)}</span>
                  {cheeringMessage.user.id === user.id && (
                    <Image
                      src="/assets/images/post/icon_x_black.png"
                      width={16}
                      height={16}
                      alt=""
                      style={{marginLeft: 'auto'}}
                      onClick={onRemove(cheeringMessage.id)}
                    />
                  )}
                </MessageDesktopBlock>
              );
            }

            return (
              <MessageMobileBlock key={cheeringMessage.id}>
                <div>
                  <p>{cheeringMessage.content}</p>

                  {cheeringMessage.user.id === user.id && (
                    <Image
                      src="/assets/images/post/icon_x_black.png"
                      width={16}
                      height={16}
                      alt=""
                      style={{marginLeft: 'auto'}}
                      onClick={onRemove(cheeringMessage.id)}
                    />
                  )}
                </div>

                <div>
                  <span>{formatDate(cheeringMessage.createdAt._seconds)}</span>
                </div>
              </MessageMobileBlock>
            );
          })}
        </MessageInnerContainer>
      )}

      <Pagination
        totalPage={totalPages}
        setPage={setCurrentPage}
        isDesktop={isDesktop}
      />
    </MessageContainer>
  );
};

export default CheeringMessagePagination;
