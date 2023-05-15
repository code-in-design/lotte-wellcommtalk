import {colors} from '@/styles/colors';
import {css} from '@emotion/react';
import styled from '@emotion/styled';

export const Section1Container = styled.div<IsDesktop>`
  background: url('/assets/images/section1/background_mobile.png') center;
  background-size: cover;
  margin-top: -62px;

  ${({isDesktop}) =>
    isDesktop &&
    css`
      background: url('/assets/images/section1/background_desktop.png') center;
      background-size: cover;
      margin-top: -82px;
    `};
`;

export const Section1Block = styled.div<IsDesktop>`
  width: fit-content;
  padding-top: 62px;
  padding-bottom: 29.38px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 58.55px;

  ${({isDesktop}) =>
    isDesktop &&
    css`
      padding-top: 142px;
      padding-bottom: 70px;
      flex-direction: row;
      gap: 56px;
      justify-content: space-between;
    `};
`;

export const Section1TitleBox = styled.div<IsDesktop>`
  display: flex;
  flex-direction: column;
  padding-top: 72px;

  font-weight: 400;
  font-size: 42px;
  line-height: 52px;
  letter-spacing: -0.6px;

  margin-bottom: 4px;

  b {
    font-weight: 800;
    white-space: pre-wrap;
  }

  ${({isDesktop}) =>
    isDesktop &&
    css`
      padding-top: 75px;
      font-size: 70px;
      line-height: 88px;
      letter-spacing: -0.9px;
      margin-bottom: 12px;
    `};
`;

export const Section1SubTitle = styled.div<IsDesktop>`
  font-weight: 700;
  font-size: 21px;
  line-height: 28px;
  letter-spacing: -0.4px;

  margin-bottom: 24px;

  b {
    color: ${colors.MAIN_COLOR};
  }

  ${({isDesktop}) =>
    isDesktop &&
    css`
      font-size: 36px;
      line-height: 48px;
      letter-spacing: -0.6px;
      margin-bottom: 48px;
    `}
`;

export const Section1TextBox = styled.div<IsDesktop>`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.3px;
  white-space: pre-wrap;

  p:nth-of-type(2) {
    margin-bottom: 4px;
  }

  b {
    font-weight: 700;
    color: ${colors.MAIN_COLOR};
  }

  ${({isDesktop}) =>
    isDesktop &&
    css`
      font-size: 21px;
      line-height: 28px;
      letter-spacing: -0.4px;
      white-space: nowrap;

      p:nth-of-type(2) {
        margin-bottom: 12px;
      }
    `}
`;
