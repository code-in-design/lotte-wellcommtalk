import {css} from '@emotion/react';
import styled from '@emotion/styled';
import Modal from 'react-modal';
import {commonModalStyles} from '@/styles/modal.styles';
import {MobileDetailContentContainer} from '@/styles/detail.styles';

export const DetailModalBlock = styled(Modal)`
  ${commonModalStyles};
  height: 574px;
`;

export const DetailImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 1 / 0.6;
  border-radius: 12px;
  overflow: hidden;

  img {
    object-fit: cover;
  }
`;

export const DetailContentContainer = styled(MobileDetailContentContainer)`
  margin-left: 0;
  margin-right: 0;
  p {
    height: 96px;
    overflow: auto;
    white-space: pre-wrap;
  }
`;

export const swiperDesktopStyles = css`
  .swiper {
    position: relative;
    width: 100%;
    border-radius: 12px;
    margin-bottom: 32px;
  }
`;

export const buttonContainerStyle = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;

  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const PrevButtonContainer = styled.div`
  ${buttonContainerStyle};
  left: 30px;
`;

export const NextButtonContainer = styled.div`
  ${buttonContainerStyle};

  right: 30px;
`;
