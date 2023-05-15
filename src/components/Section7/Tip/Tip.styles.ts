import {colors} from '@/styles/colors';
import {css} from '@emotion/react';
import styled from '@emotion/styled';

export const TipLabel = styled.label<IsDesktop>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 58px;
  height: 38px;
  margin: 0 auto;
  border: 1px solid ${colors.BLACK};
  border-radius: 100px;

  font-size: 18px;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.3px;

  margin-bottom: 12px;

  ${({isDesktop}) =>
    isDesktop &&
    css`
      width: 80px;
      height: 54px;

      font-size: 28px;
      line-height: 38px;
      letter-spacing: -0.5px;

      margin-bottom: 24px;
    `}
`;

export const TipText = styled.p<IsDesktop>`
  white-space: pre-wrap;

  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.3px;
  margin-bottom: 24px;

  ${({isDesktop}) =>
    isDesktop &&
    css`
      font-size: 28px;
      line-height: 38px;
      letter-spacing: -0.5px;
      margin-bottom: 64px;
    `}
`;

export const IntroductionExample = styled.div<IsDesktop>`
  display: flex;
  flex-direction: column;
  padding: 32px 20px;
  gap: 20px;
  width: 100%;
  background: ${colors.SUB_COLOR_03};
  border-radius: 20px;

  ${({isDesktop}) =>
    isDesktop &&
    css`
      padding: 40px 80px;
      gap: 40px;
      flex-direction: row;
      align-items: center;
    `}
`;

export const ExampleImageWrapper = styled.div<IsDesktop>`
  position: relative;

  width: 100%;
  height: 212px;
  border-radius: 12px;
  overflow: hidden;

  img {
    object-fit: cover;
  }

  ${({isDesktop}) =>
    isDesktop &&
    css`
      width: 308px;
      height: 172px;
    `}
`;

export const IntroductionExampleText = styled.p<IsDesktop>`
  white-space: pre-wrap;

  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.2px;

  ${({isDesktop}) =>
    isDesktop &&
    css`
      width: 548px;
      font-size: 21px;
      line-height: 28px;
      letter-spacing: -0.4px;
    `}
`;
