import {colors} from '@/styles/colors';
import {css} from '@emotion/react';
import styled from '@emotion/styled';

export const HeaderBlock = styled.header<IsDesktop>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  height: 62px;
  padding: 21px 16px;
  border-bottom: 1px solid ${colors.GRAY100};

  background-color: ${colors.WHITE};
  z-index: 100;

  ${({isDesktop}) =>
    isDesktop &&
    css`
      height: 82px;
      padding: 25px 32px;
    `}
`;
