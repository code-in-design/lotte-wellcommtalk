import {Global} from '@emotion/react';
import Image from 'next/image';
import React, {useCallback} from 'react';
import Close from '../Close';
import {CommonModalProps} from '../Modals.types';
import {
  DetailContentContainer,
  DetailImageWrapper,
  DetailModalBlock,
  swiperDesktopStyles,
} from './DetailModal.styles';

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import SliderPrevButton from './SliderButtons/SliderPrevButton';
import SliderNextButton from './SliderButtons/SliderNextButton';
import {useGetPostDetail} from '@/hooks/usePost';
import {useImageZoomModal} from '@/hooks/useModal';

export interface DetailModalProps extends CommonModalProps {
  postId: string;
}

const DetailModal = ({postId, onClose}: DetailModalProps) => {
  const {data: post} = useGetPostDetail(postId);
  const {openImgaeZoomModal} = useImageZoomModal();

  const onImageZoom = useCallback(
    (imageUrl: string) => () => {
      openImgaeZoomModal({imageUrl, isDesktop: true});
    },
    [openImgaeZoomModal],
  );

  if (!post) {
    return null;
  }

  return (
    <>
      <Global styles={swiperDesktopStyles} />

      <DetailModalBlock isOpen>
        <Close onClose={onClose} />

        <Swiper allowTouchMove threshold={20} speed={500} loop>
          {post.imageUrls.length > 1 && <SliderPrevButton />}
          {post.imageUrls.map(imageUrl => (
            <SwiperSlide key={imageUrl}>
              <DetailImageWrapper onClick={onImageZoom(imageUrl)}>
                <Image src={imageUrl} fill alt="" loading="eager" />
              </DetailImageWrapper>
            </SwiperSlide>
          ))}
          {post.imageUrls.length > 1 && <SliderNextButton />}
        </Swiper>

        <DetailContentContainer>
          <b>{post.title}</b>
          <p>{post.content}</p>
        </DetailContentContainer>
      </DetailModalBlock>
    </>
  );
};

export default DetailModal;
