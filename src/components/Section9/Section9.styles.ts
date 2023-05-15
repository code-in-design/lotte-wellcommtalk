import {colors} from '@/styles/colors';
import {css} from '@emotion/react';
import styled from '@emotion/styled';

export const Section10Container = styled.div`
  background: ${colors.PINK};
`;

export const Section10Text = styled.p<IsDesktop>`
  white-space: pre-wrap;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  letter-spacing: -0.4px;

  b {
    position: relative;
    font-weight: 800;

    img {
      position: absolute;
      top: 2px;
      right: -24px;
    }
  }

  ${({isDesktop}) =>
    isDesktop &&
    css`
      white-space: nowrap;

      font-size: 42px;
      line-height: 64px;
      letter-spacing: -0.6px;

      b {
        img {
          position: absolute;
          right: -48px;
        }
      }
    `}
`;
