import {colors} from '@/styles/colors';
import {css} from '@emotion/react';
import styled from '@emotion/styled';

export const Section4Container = styled.div<IsDesktop>`
  background: url('/assets/images/section4/background_mobile.png') center;
  background-size: cover;

  ${({isDesktop}) =>
    isDesktop &&
    css`
      background: url('/assets/images/section4/background_desktop.png') center;
      background-size: cover;
    `}
`;

export const Section4Text = styled.p<IsDesktop>`
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.3px;
  color: ${colors.WHITE};
  white-space: pre-wrap;
  margin-bottom: 32px;

  b {
    font-weight: 800;
  }

  ${({isDesktop}) =>
    isDesktop &&
    css`
      white-space: nowrap;
      font-size: 28px;
      line-height: 38px;
      letter-spacing: -0.5px;
      margin-bottom: 64px;
    `}
`;

export const RewardBlock = styled.div<IsDesktop>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 20px;
  gap: 12px;

  width: 100%;
  background: ${colors.WHITE};
  border-radius: 500px;

  span {
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.2px;
  }

  ${({isDesktop}) =>
    isDesktop &&
    css`
      padding: 40px 80px;

      span {
        font-size: 21px;
        line-height: 28px;
        letter-spacing: -0.4px;
      }
    `}
`;
