import {colors} from '@/styles/colors';
import {SectionBlock} from '@/styles/section.styles';
import {css} from '@emotion/react';
import styled from '@emotion/styled';

export const Section3Container = styled.div`
  background: ${colors.PINK};
`;

export const Section3Text = styled.p<IsDesktop>`
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
      white-space: unset;

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

export const Section3Block = styled(SectionBlock)`
  ${({isDesktop}) =>
    isDesktop &&
    css`
      width: 1233px;
    `}
`;
