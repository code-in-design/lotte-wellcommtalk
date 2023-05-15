import {colors} from '@/styles/colors';
import {css} from '@emotion/react';
import styled from '@emotion/styled';

export const Section7Container = styled.div`
  background: ${colors.GRAY50};
`;

export const Section7Title = styled.h2<IsDesktop>`
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  letter-spacing: -0.5px;

  white-space: pre-wrap;
  margin-bottom: 32px;

  ${({isDesktop}) =>
    isDesktop &&
    css`
      font-size: 42px;
      line-height: 52px;
      letter-spacing: -0.6px;
      margin-bottom: 64px;
    `}
`;

export const SpeechBubbleContainer = styled.div<IsDesktop>`
  position: relative;
  margin-bottom: ${({isDesktop}) => (isDesktop ? '64px' : '32px')};
`;

export const Section7ImageWrapper1 = styled.div<IsDesktop>`
  position: absolute;
  left: 0px;
  top: 31.16px;

  width: 53.42px;
  height: 53.42px;
  z-index: 20;

  ${({isDesktop}) =>
    isDesktop &&
    css`
      width: 120px;
      height: 120px;

      left: 13.26%;
      right: 75.38%;
      top: 16.51%;
      bottom: 55.19%;
    `}

  img {
    filter: drop-shadow(0px 1.78065px 5.34194px rgba(0, 0, 0, 0.22));
  }
`;

export const Section7ImageWrapper2 = styled(Section7ImageWrapper1)`
  left: 291.58px;
  top: 89.03px;

  ${({isDesktop}) =>
    isDesktop &&
    css`
      left: 75.28%;
      right: 13.35%;
      top: 47.17%;
      bottom: 24.53%;
    `}
`;

export const SpeechInnerContainer = styled.div<IsDesktop>`
  width: 280px;
  height: 189px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  ${({isDesktop}) =>
    isDesktop &&
    css`
      width: 629px;
      height: 424px;
    `};
`;

interface Section7SpeechBubbleProps extends IsDesktop {
  backgroundColor: string;
  color?: string;
  isRight?: boolean;
}

export const Section7SpeechBubble = styled.div<Section7SpeechBubbleProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-self: ${({isRight}) => (isRight ? 'flex-end' : 'flex-start')};
  padding: 10.6839px 17.8065px;
  width: 240.39px;
  height: 59.37px;

  background: ${({backgroundColor}) => backgroundColor};
  border-radius: 44.5161px;

  font-weight: 700;
  font-size: 14.2452px;
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.222581px;
  color: ${({color}) => color ?? colors.BLACK};

  white-space: pre-wrap;

  ${({isDesktop}) =>
    isDesktop &&
    css`
      padding: 24px 40px;
      width: 540px;
      height: 132px;
      border-radius: 100px;

      font-weight: 700;
      font-size: 32px;
      line-height: 42px;
    `};

  &::after {
    position: absolute;
    bottom: ${({isDesktop}) => (isDesktop ? '-28px' : '-12px')};
    left: ${({isDesktop}) => (isDesktop ? '120px' : '54px')};
    z-index: 10;

    content: '';

    border-width: ${({isDesktop}) => (isDesktop ? '14px' : '6px')};
    border-style: solid;

    border-top-color: ${({backgroundColor}) => backgroundColor};
    border-left-color: ${({backgroundColor}) => backgroundColor};
    border-right-color: transparent;
    border-bottom-color: transparent;

    ${({backgroundColor, isRight, isDesktop}) =>
      isRight &&
      css`
        left: unset;
        right: ${isDesktop ? '120px' : '54px'};

        border-top-color: ${backgroundColor};
        border-left-color: transparent;
        border-right-color: ${backgroundColor};
        border-bottom-color: transparent;
      `}
  }
`;

export const IntroductionContainer = styled.div<IsDesktop>`
  display: flex;
  flex-direction: column;

  gap: 32px;
  margin-bottom: 32px;

  button {
    padding: 12px 0;
    background-color: ${colors.MAIN_COLOR};
    border-radius: 8px;

    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.3px;
    color: ${colors.WHITE};
  }

  ${({isDesktop}) =>
    isDesktop &&
    css`
      gap: 64px;
      margin-bottom: 64px;

      button {
        padding: 19px 0;

        font-size: 18px;
        line-height: 26px;
        letter-spacing: -0.3px;
      }
    `};
`;

export const StepContainer = styled.div<IsDesktop>`
  display: flex;
  flex-direction: column;
  gap: 32px;

  ${({isDesktop}) =>
    isDesktop &&
    css`
      flex-direction: row;
    `};
`;

export const StepBlock = styled.div<IsDesktop>`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 12px;

  background: ${colors.WHITE};
  border-radius: 16px;

  ${({isDesktop}) =>
    isDesktop &&
    css`
      width: 512px;
      height: 178px;
      gap: 24px;
      padding: 24px 32px;
    `};
`;

export const StepLabel = styled.label<IsDesktop>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 63px;
  height: 28px;
  border: 1px solid ${colors.MAIN_COLOR};
  border-radius: 8px;

  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.2px;
  color: ${colors.MAIN_COLOR};

  ${({isDesktop}) =>
    isDesktop &&
    css`
      width: 80px;
      height: 34px;
    `};
`;

export const StepInnerBlock = styled.div<IsDesktop>`
  display: flex;
  flex-direction: column;
  gap: 12px;
  white-space: pre-wrap;

  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.3px;

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.2px;
  }

  ${({isDesktop}) =>
    isDesktop &&
    css`
      flex-direction: row;
      align-items: center;

      font-size: 24px;
      line-height: 32px;
      letter-spacing: -0.4px;

      p {
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.3px;
        margin-top: 8px;
      }
    `};
`;
