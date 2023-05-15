import {Global} from '@emotion/react';
import Image from 'next/image';
import React, {useCallback, useEffect} from 'react';
import {
  MobileDetailBody,
  MobileDetailContentContainer,
  MobileDetailHeader,
  MobileImageWrapper,
  swiperMobileStyles,
} from './DetailMobileModal.styles';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import {DetailModalProps} from '../DetailModal/DetailModal';
import {useGetPostDetail} from '@/hooks/usePost';
import {MobileModal} from '@/styles/modal.styles';
import {useRecoilValue} from 'recoil';
import {modalState} from '@/atoms/modal';
import {useDetailMobileModal, useImageZoomModal} from '@/hooks/useModal';

const DetailMobileModal = ({postId}: DetailModalProps) => {
  const {data: post} = useGetPostDetail(postId);
  const modals = useRecoilValue(modalState);

  const {closeDetailMobileModal} = useDetailMobileModal();
  const {openImgaeZoomModal, closeImageZoomModal} = useImageZoomModal();

  const popStateListenr = useCallback(() => {
    if (modals.length === 1) {
      closeDetailMobileModal();
    } else if (modals.length === 2) {
      closeImageZoomModal();
    }
  }, [closeDetailMobileModal, closeImageZoomModal, modals.length]);

  useEffect(() => {
    window.addEventListener('popstate', popStateListenr);

    return () => {
      window.removeEventListener('popstate', popStateListenr);
    };
  }, [popStateListenr]);

  const onGoBack = useCallback(() => {
    history.back();
  }, []);

  const onImageZoom = useCallback(
    (imageUrl: string) => () => {
      openImgaeZoomModal({imageUrl});
    },
    [openImgaeZoomModal],
  );

  if (!post) {
    return null;
  }

  return (
    <>
      <Global styles={swiperMobileStyles} />

      <MobileModal isOpen>
        <MobileDetailHeader>
          <Image
            src="/assets/images/section5/chevron_left.png"
            width={24}
            height={24}
            alt="back"
            onClick={onGoBack}
          />
        </MobileDetailHeader>

        <MobileDetailBody>
          <Swiper
            pagination={{type: 'fraction'}}
            allowTouchMove
            threshold={20}
            speed={500}
            loop
            modules={[Pagination]}>
            {post.imageUrls.map(imageUrl => (
              <SwiperSlide key={imageUrl}>
                <MobileImageWrapper>
                  <Image
                    src={imageUrl}
                    fill
                    alt=""
                    loading="eager"
                    onClick={onImageZoom(imageUrl)}
                  />
                </MobileImageWrapper>
              </SwiperSlide>
            ))}
          </Swiper>

          <MobileDetailContentContainer>
            <b>{post.title}</b>
            <p>{post.content}</p>
          </MobileDetailContentContainer>
        </MobileDetailBody>
      </MobileModal>
    </>
  );
};

export default DetailMobileModal;
