import {colors} from '@/styles/colors';
import {css} from '@emotion/react';
import styled from '@emotion/styled';

export const Section6Container = styled.div<IsDesktop>`
  background: url('/assets/images/section6/background_mobile.png') center;
  background-size: cover;

  ${({isDesktop}) =>
    isDesktop &&
    css`
      background: url('/assets/images/section6/background_desktop.png') center;
      background-size: cover;
    `}
`;

export const Section6Text = styled.p<IsDesktop>`
  white-space: pre-wrap;
  margin-bottom: 32px;

  font-size: 18px;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.3px;
  color: ${colors.WHITE};

  b {
    font-weight: 800;
  }

  ${({isDesktop}) =>
    isDesktop &&
    css`
      white-space: nowrap;
      margin-bottom: 64px;

      font-size: 28px;
      line-height: 38px;
      letter-spacing: -0.5px;
    `}
`;

export const GiftContainer = styled.div<IsDesktop>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 20px;
  gap: 32px;

  width: 100%;
  margin-bottom: 24px;

  background: ${colors.WHITE};
  border-radius: 20px;

  ${({isDesktop}) =>
    isDesktop &&
    css`
      padding: 40px 80px;
      flex-direction: row;
      align-items: center;
      gap: 12px;
    `}
`;

export const GiftBlock = styled.div<IsDesktop>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  span {
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.2px;
    text-align: center;
  }

  ${({isDesktop}) =>
    isDesktop &&
    css`
      span {
        width: 290.67px;
        font-size: 21px;
        line-height: 28px;
        letter-spacing: -0.4px;
      }
    `}
`;

export const CautionText = styled.p<IsDesktop>`
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.3px;

  color: ${colors.SUB_COLOR_03};

  white-space: ${({isDesktop}) => (isDesktop ? 'nowrap' : 'pre-wrap')};
`;
