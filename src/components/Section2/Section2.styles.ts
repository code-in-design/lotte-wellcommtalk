import {colors} from '@/styles/colors';
import {css} from '@emotion/react';
import styled from '@emotion/styled';

export const Section2Container = styled.div<IsDesktop>`
  background: url('/assets/images/section2/background_mobile.png') center;
  background-size: cover;

  ${({isDesktop}) =>
    isDesktop &&
    css`
      background: url('/assets/images/section2/background_desktop.png') center;
      background-size: cover;
    `}
`;

export const Section2Title = styled.h2<IsDesktop>`
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;

  text-align: center;
  letter-spacing: -0.5px;

  white-space: pre-wrap;
  margin-bottom: 12px;

  ${({isDesktop}) =>
    isDesktop &&
    css`
      font-size: 42px;
      line-height: 52px;
      letter-spacing: -0.6px;

      white-space: nowrap;
      margin-bottom: 24px;
    `}
`;

export const Section2Text = styled.p<IsDesktop>`
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.3px;
  white-space: pre-wrap;

  margin-bottom: 32px;

  ${({isDesktop}) =>
    isDesktop &&
    css`
      font-size: 24px;
      line-height: 32px;
      letter-spacing: -0.4px;
      margin-bottom: 76px;
    `}
`;

export const QuizBlock = styled.div<IsDesktop>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 20px;
  gap: 5px;

  background: ${colors.PINK};
  border-radius: 20px;
  margin-bottom: 32px;

  p {
    font-size: 21px;
    line-height: 28px;
    letter-spacing: -0.4px;
  }

  b {
    font-weight: 800;
  }

  ${({isDesktop}) =>
    isDesktop &&
    css`
      padding: 40px 80px 55px;
      gap: 8px;
      margin-bottom: 64px;

      p {
        font-size: 32px;
        line-height: 42px;
        letter-spacing: -0.5px;
      }
    `}
`;

export const ConsonantContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ConsonantBlock = styled.div`
  width: 48px;
  height: 48px;
  background: ${colors.BLACK};
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;
  font-size: 32px;
  line-height: 42px;
  letter-spacing: -0.5px;
  color: ${colors.WHITE};
`;

export const Section2Button = styled.button<IsDesktop>`
  width: 100%;
  padding: 12px 0;
  background-color: ${colors.MAIN_COLOR};
  border-radius: 8px;

  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.3px;
  color: ${colors.WHITE};

  margin-top: 32px;

  ${({isDesktop}) =>
    isDesktop &&
    css`
      padding: 19px 0;

      font-size: 18px;
      line-height: 26px;
      letter-spacing: -0.3px;

      margin-top: 64px;
    `};
`;
