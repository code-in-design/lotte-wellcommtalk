import {colors} from '@/styles/colors';
import {SectionBlock} from '@/styles/section.styles';
import {css} from '@emotion/react';
import styled from '@emotion/styled';

export const Section3Container = styled.div`
  background: ${colors.BLUE};
`;

export const Section3Text = styled.p<IsDesktop>`
  white-space: pre-wrap;
  font-size: 20px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.4px;
  color: ${colors.WHITE};

  b {
    position: relative;
    font-weight: 800;
    color: ${colors.YELLOW};

    img {
      position: absolute;
      top: 2px;
      right: -24px;
    }
  }

  ${({isDesktop}) =>
    isDesktop &&
    css`
      font-size: 34px;
      line-height: 64px;
      text-align: center;
      letter-spacing: -0.6px;

      b {
        img {
          position: absolute;
          right: -48px;
          top: -2px;
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
