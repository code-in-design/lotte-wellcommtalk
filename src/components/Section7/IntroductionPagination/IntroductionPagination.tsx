import pageContainerState from '@/atoms/pageContainer';
import {userState} from '@/atoms/user';
import {DESKTOP_PAGE_SIZE, MOBILE_PAGE_SIZE} from '@/common/constants';
import Pagination from '@/components/Pagination/Pagination';
import {useDetailDesktopModal, useDetailMobileModal} from '@/hooks/useModal';
import {useDeletePost, useGetPosts, useGetPostsCount} from '@/hooks/usePost';
import Image from 'next/image';
import React, {useCallback, useMemo, useState} from 'react';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {
  ImageContainer,
  ImageContainerCursor,
  ImageContainerLoading,
  ImageContainerWrapper,
  RemoveIconWrapper,
  ThumnailWrapper,
} from './IntroductionPagination.styles';

const IntroductionPagination = ({isDesktop}: IsDesktop) => {
  const user = useRecoilValue(userState);
  const [currentPage, setCurrentPage] = useState(1);
  const setPageContainer = useSetRecoilState(pageContainerState);

  const {openDetailMobileModal} = useDetailMobileModal();
  const {openDetailDesktopModal} = useDetailDesktopModal();

  const {data: posts, isFetching} = useGetPosts({page: currentPage, isDesktop});

  const {
    data: {count},
  } = useGetPostsCount();
  const totalPages = useMemo(
    () => Math.ceil(count / (isDesktop ? DESKTOP_PAGE_SIZE : MOBILE_PAGE_SIZE)),
    [count, isDesktop],
  );
  const {mutate: deletePost} = useDeletePost(currentPage);

  const onRemove = useCallback(
    (postId: string) => () => {
      const isConfirm = confirm('부서 소개를 삭제하시겠습니까?');
      if (!isConfirm) return;

      deletePost(postId);
    },
    [deletePost],
  );

  const setRef = useCallback(
    (node: HTMLDivElement | null) => {
      setPageContainer(node);
    },
    [setPageContainer],
  );

  const onDetail = useCallback(
    (postId: string) => () => {
      if (isDesktop) {
        openDetailDesktopModal(postId);
      } else {
        openDetailMobileModal(postId);
      }
    },
    [isDesktop, openDetailDesktopModal, openDetailMobileModal],
  );

  if (!user) {
    return null;
  }

  return (
    <ImageContainerWrapper isDesktop={isDesktop}>
      <ImageContainerCursor isDesktop={isDesktop} ref={setRef} />

      {isFetching ? (
        <ImageContainerLoading isDesktop={isDesktop} />
      ) : (
        <ImageContainer isDesktop={isDesktop}>
          {posts.map(post => (
            <ThumnailWrapper key={post.id} isDesktop={isDesktop}>
              {post.userId === user.id && (
                <RemoveIconWrapper onClick={onRemove(post.id)}>
                  <Image
                    src="/assets/images/post/icon_x.png"
                    width={16}
                    height={16}
                    alt="remove"
                  />
                </RemoveIconWrapper>
              )}

              <Image
                src={post.imageUrls[0]}
                fill
                alt=""
                onClick={onDetail(post.id)}
              />
            </ThumnailWrapper>
          ))}
        </ImageContainer>
      )}

      <Pagination
        totalPage={totalPages}
        setPage={setCurrentPage}
        isDesktop={isDesktop}
      />
    </ImageContainerWrapper>
  );
};

export default IntroductionPagination;
