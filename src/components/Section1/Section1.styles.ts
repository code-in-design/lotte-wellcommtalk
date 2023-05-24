import {colors} from '@/styles/colors';
import {css} from '@emotion/react';
import styled from '@emotion/styled';

export const Section1Container = styled.div<IsDesktop>`
  margin-top: -62px;
  background: url('/assets/images/section1/section1_mobile.png') top;
  background-size: cover;

  ${({isDesktop}) =>
    isDesktop &&
    css`
      margin-top: -82px;
      background: url('/assets/images/section1/section1_desktop.png') center;
      background-size: cover;
    `};
`;

export const Section1Block = styled.div<IsDesktop>`
  width: 343px;
  margin: 0 auto;
  padding-top: 62px;

  display: flex;
  flex-direction: column;
  padding-bottom: 91px;

  ${({isDesktop}) =>
    isDesktop &&
    css`
      padding-top: 82px;
      padding-bottom: 94px;
      width: 1056px;
      align-items: center;
    `};
`;

export const Section1TitleBlock = styled.div<IsDesktop>`
  font-weight: 800;
  font-size: 66px;
  line-height: 66px;
  letter-spacing: -0.717504px;
  white-space: pre-wrap;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  margin-top: 65px;
  margin-bottom: 63px;

  span {
    text-align: right;
  }

  ${({isDesktop}) =>
    isDesktop &&
    css`
      width: 460px;
      margin-top: 72px;

      font-size: 111px;
      line-height: 111px;
      letter-spacing: -0.953906px;
    `};
`;

export const Section1TextBox = styled.div<IsDesktop>`
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -0.3px;
  white-space: pre-wrap;

  margin-bottom: 32px;

  strong {
    display: block;
    font-weight: 700;
    font-size: 21px;
    line-height: 28px;
    letter-spacing: -0.4px;
    margin-bottom: 16px;
  }

  b {
    font-weight: 700;
    color: ${colors.MAIN_COLOR};
  }

  ${({isDesktop}) =>
    isDesktop &&
    css`
      text-align: center;
      font-size: 21px;
      line-height: 32px;
      letter-spacing: -0.4px;
    `}
`;

export const WellCommBlock = styled.div<IsDesktop>`
  background: rgba(225, 225, 234, 0.5);
  border-radius: 12px;
  white-space: pre-wrap;

  display: flex;
  padding: 16px;
  gap: 16px;
  align-items: center;

  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.2px;

  b {
    font-weight: 800;
  }

  ${({isDesktop}) =>
    isDesktop &&
    css`
      gap: 12px;
      max-width: 515px;

      font-size: 18px;
      line-height: 28px;
      letter-spacing: -0.3px;
    `}
`;
