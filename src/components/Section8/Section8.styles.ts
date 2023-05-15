import {colors} from '@/styles/colors';
import {css} from '@emotion/react';
import styled from '@emotion/styled';

export const Section4Container = styled.div<IsDesktop>`
  background: url('/assets/images/section9/background_mobile.png') center;
  background-size: cover;

  ${({isDesktop}) =>
    isDesktop &&
    css`
      background: url('/assets/images/section9/background_desktop.png') center;
      background-size: cover;
    `}
`;

export const Section9Text = styled.p<IsDesktop>`
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.3px;
  margin-bottom: 32px;
  white-space: pre-wrap;

  b {
    font-weight: 800;
  }

  ${({isDesktop}) =>
    isDesktop &&
    css`
      font-size: 28px;
      line-height: 38px;
      letter-spacing: -0.5px;
      margin-bottom: 64px;
    `}
`;

export const Section9Block = styled.div<IsDesktop>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 32px 20px;
  width: 100%;
  margin: 0 auto;

  background: ${colors.WHITE};
  border-radius: 500px;

  span {
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    letter-spacing: -0.2px;
    color: ${colors.GRAY400};
  }

  ${({isDesktop}) =>
    isDesktop &&
    css`
      width: 600px;
      padding: 40px 80px;
      span {
        font-size: 14px;
        line-height: 20px;
      }
    `}
`;

export const Section9ImageContainer = styled.div<IsDesktop>`
  display: flex;
  align-items: center;
  gap: 12px;

  div {
    display: flex;
    align-items: center;
    gap: 7px;
  }

  ${({isDesktop}) =>
    isDesktop &&
    css`
      div {
        gap: 10px;
      }
    `}
`;
