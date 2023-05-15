import {colors} from '@/styles/colors';
import {css} from '@emotion/react';
import styled from '@emotion/styled';

export const ImageContainerWrapper = styled.div<IsDesktop>`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border: 1px solid ${colors.BLACK};
  border-radius: 20px;

  ${({isDesktop}) =>
    isDesktop &&
    css`
      gap: 28px;
      padding: 40px;
    `};
`;

export const ImageContainerCursor = styled.div<IsDesktop>`
  position: absolute;
  top: ${({isDesktop}) => (isDesktop ? '50%' : '-94px')};
`;

export const ImageContainerLoading = styled.div<IsDesktop>`
  width: 100%;
  min-height: ${({isDesktop}) => (isDesktop ? '456px' : '676px')};
`;

export const ImageContainer = styled.div<IsDesktop>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  ${({isDesktop}) =>
    isDesktop &&
    css`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    `};
`;

export const ThumnailWrapper = styled.div<IsDesktop>`
  position: relative;
  cursor: pointer;

  width: 100%;
  height: 212px;
  border-radius: 12px;
  overflow: hidden;

  ${({isDesktop}) =>
    isDesktop &&
    css`
      height: 216px;
    `};

  img {
    object-fit: cover;
  }
`;

export const RemoveIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;

  position: absolute;
  width: 24px;
  height: 24px;
  left: 0px;
  top: 0px;

  background: ${colors.BLACK};
  border-radius: 50%;
  z-index: 10;
`;
