import {colors} from '@/styles/colors';
import {css} from '@emotion/react';
import styled from '@emotion/styled';

export const Section5Container = styled.div`
  background: ${colors.GRAY50};
`;

export const Section5Title = styled.p<IsDesktop>`
  white-space: pre-wrap;
  margin-bottom: 32px;

  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  letter-spacing: -0.5px;

  ${({isDesktop}) =>
    isDesktop &&
    css`
      margin-bottom: 64px;

      font-size: 42px;
      line-height: 52px;
      letter-spacing: -0.6px;
    `}
`;

export const Section5SpeechContainer = styled.div<IsDesktop>`
  display: flex;
  flex-direction: column;
  gap: 37.55px;
  margin-bottom: 46px;

  ${({isDesktop}) =>
    isDesktop &&
    css`
      gap: 60px;
      margin-bottom: 92px;
    `}
`;

export const Section5SpeechBlock = styled.div<IsDesktop>`
  display: flex;
  gap: ${({isDesktop}) => (isDesktop ? '24px' : '12px')};
`;

interface Section5SpeechBubbleProps extends IsDesktop {
  backgroundColor: string;
  isRight?: boolean;
}

export const Section5SpeechBubble = styled.div<Section5SpeechBubbleProps>`
  position: relative;
  white-space: pre-wrap;

  padding: 12.4082px 20.6803px;

  background: ${({backgroundColor}) => backgroundColor};
  border-radius: 51.7007px;

  font-weight: 700;
  font-size: 12.4082px;
  line-height: 17px;
  letter-spacing: -0.206803px;

  ${({isDesktop}) =>
    isDesktop &&
    css`
      padding: 24px 40px;
      border-radius: 100px;

      font-size: 24px;
      line-height: 32px;
      letter-spacing: -0.4px;
    `}

  &::after {
    position: absolute;
    bottom: ${({isDesktop}) => (isDesktop ? '-28px' : '-14px')};
    left: ${({isDesktop}) => (isDesktop ? '90px' : '46.5px')};

    content: '';

    border-width: ${({isDesktop}) => (isDesktop ? '14px' : '7px')};
    border-style: solid;

    border-top-color: ${({backgroundColor}) => backgroundColor};
    border-left-color: ${({backgroundColor}) => backgroundColor};
    border-right-color: transparent;
    border-bottom-color: transparent;

    ${({backgroundColor, isRight, isDesktop}) =>
      isRight &&
      css`
        left: unset;
        right: ${isDesktop ? '90px' : '46.5px'};

        border-top-color: ${backgroundColor};
        border-left-color: transparent;
        border-right-color: ${backgroundColor};
        border-bottom-color: transparent;
      `}
  }
`;
