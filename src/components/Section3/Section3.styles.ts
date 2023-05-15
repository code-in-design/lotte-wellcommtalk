import {colors} from '@/styles/colors';
import {css} from '@emotion/react';
import styled from '@emotion/styled';

export const Section3Container = styled.div`
  background: ${colors.BLUE};
`;

export const HintText = styled.p<IsDesktop>`
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.3px;
  color: ${colors.WHITE};

  ${({isDesktop}) =>
    isDesktop &&
    css`
      font-size: 28px;
      line-height: 38px;
      letter-spacing: -0.5px;
    `}
`;

export const Vision = styled.div<IsDesktop>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px 20px;
  gap: 12px;

  width: 100%;

  margin-top: 24px;
  margin-bottom: 48px;

  background: ${colors.SUB_COLOR_01};
  border-radius: 20px;

  ${({isDesktop}) =>
    isDesktop &&
    css`
      padding: 40px 80px;
      gap: 20px;

      margin-top: 40px;
      margin-bottom: 80px;
    `}
`;

export const VisionText = styled.p<IsDesktop>`
  white-space: pre-wrap;

  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.3px;

  ${({isDesktop}) =>
    isDesktop &&
    css`
      font-size: 32px;
      line-height: 42px;
      letter-spacing: -0.5px;
    `}
`;

export const VisionSubText = styled.p<IsDesktop>`
  white-space: pre-wrap;

  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.2px;

  ${({isDesktop}) =>
    isDesktop &&
    css`
      font-size: 21px;
      line-height: 28px;
      letter-spacing: -0.4px;
    `}
`;
