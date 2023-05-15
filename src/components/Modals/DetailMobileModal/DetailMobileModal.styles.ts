import styled from '@emotion/styled';
import {colors} from '@/styles/colors';
import {css} from '@emotion/react';

export const MobileDetailHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  height: 62px;
  padding: 19px 16px;
  border-bottom: 1px solid ${colors.GRAY100};

  background-color: ${colors.WHITE};
  z-index: 101;

  img {
    cursor: pointer;
    display: block;
  }
`;

export const MobileDetailBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 62px;
`;

export const MobileImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 1 /0.7;

  img {
    object-fit: cover;
  }
`;

export const MobileDetailContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-left: 16px;
  margin-right: 16px;

  b {
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.3px;
  }

  p {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.3px;
    white-space: pre-wrap;
  }
`;

export const swiperMobileStyles = css`
  .swiper {
    position: relative;
    width: 100%;
  }

  .swiper-pagination-fraction {
    left: 50%;
    transform: translateX(-50%);
    bottom: 12px;

    display: flex;
    gap: 1.5px;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;
    width: 37px;
    height: 22px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 30px;

    font-size: 11px;
    line-height: 14px;
    letter-spacing: -0.2px;
    color: ${colors.WHITE};
  }
`;
