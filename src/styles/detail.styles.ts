import styled from '@emotion/styled';
import {colors} from '@/styles/colors';

export const MobileDetailHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  height: 62px;
  padding: 19px 16px;
  border-bottom: 1px solid ${colors.GRAY100};

  background-color: ${colors.WHITE};
  z-index: 101;

  img {
    cursor: pointer;
    display: block;
  }
`;

export const MobileDetailBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 62px;
`;

export const MobileImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 1 /0.7;

  img {
    object-fit: cover;
  }
`;

export const MobileDetailContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-left: 16px;
  margin-right: 16px;

  b {
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.3px;
  }

  p {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.3px;
  }
`;
