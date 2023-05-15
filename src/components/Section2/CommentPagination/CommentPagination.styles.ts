import {colors} from '@/styles/colors';
import {css} from '@emotion/react';
import styled from '@emotion/styled';

export const MessageContainer = styled.div<IsDesktop>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;

  width: 100%;

  border: 1px solid ${colors.BLACK};
  border-radius: 20px;

  ${({isDesktop}) =>
    isDesktop &&
    css`
      padding: 40px;
      gap: 28px;
    `}
`;

export const MessageInnerContainerLoading = styled.div<IsDesktop>`
  height: ${({isDesktop}) => (isDesktop ? '288px' : '308px')};
`;

export const MessageInnerContainer = styled.div<IsDesktop>`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  img {
    cursor: pointer;
  }
`;

export const MessageMobileBlock = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.WHITE};
  padding: 8px 12px;
  border-radius: 8px;
  gap: 4px;

  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.2px;

  div {
    display: flex;
    align-items: center;
  }
`;

export const MessageDesktopBlock = styled.div`
  display: flex;
  align-items: center;
  background: ${colors.WHITE};
  padding: 12px 20px;
  border-radius: 8px;
  gap: 12px;

  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.3px;

  p {
    font-weight: 700;
    flex: 1;
  }

  span {
    text-align: center;
  }

  span:first-of-type {
    width: 120px;
  }

  span:last-of-type {
    width: 160px;
  }
`;

export const VerticalBar = styled.div<IsDesktop>`
  width: 1px;
  height: 12px;
  margin-left: 8px;
  margin-right: 8px;

  background: ${colors.GRAY200};

  ${({isDesktop}) =>
    isDesktop &&
    css`
      height: 20px;
      margin: 0;
    `}
`;
