import React, {useCallback} from 'react';
import {
  ImageZoomBody,
  ImageZoomModalBlock,
  ImageZoomModalHeder,
} from './ImageZoomModal.styles';
import MobileClose from '../MobileClose';
import Image from 'next/image';
import {CommonModalProps} from '../Modals.types';

export interface ImageZoomModalProps extends CommonModalProps {
  imageUrl: string;
  isDesktop?: boolean;
}

const ImageZoomModal = ({
  imageUrl,
  isDesktop,
  onClose,
}: ImageZoomModalProps) => {
  const onCloseMobile = useCallback(() => {
    history.back();
  }, []);

  return (
    <ImageZoomModalBlock isOpen>
      <ImageZoomModalHeder>
        <MobileClose onClose={isDesktop ? onClose : onCloseMobile} />
      </ImageZoomModalHeder>
      <ImageZoomBody>
        <Image src={imageUrl} fill alt="" />
      </ImageZoomBody>
    </ImageZoomModalBlock>
  );
};

export default ImageZoomModal;
