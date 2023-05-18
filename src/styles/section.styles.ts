import {css} from '@emotion/react';
import styled from '@emotion/styled';
import {colors} from './colors';

export const SectionBlock = styled.div<IsDesktop>`
  width: 343px;
  padding-top: 100px;
  padding-bottom: 100px;
  margin: 0 auto;

  ${({isDesktop}) =>
    isDesktop &&
    css`
      width: 1056px;
      padding-top: 120px;
      padding-bottom: 120px;
    `};
`;

interface SectionLabelProps extends IsDesktop {
  backgroundColor: string;
  color?: string;
}

export const SectionLabel = styled.label<SectionLabelProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 32px;

  background: ${({backgroundColor}) => backgroundColor};
  border-radius: 100px;

  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.3px;
  color: ${({color}) => color ?? colors.BLACK};

  width: fit-content;
  margin: 0 auto;
  margin-bottom: 12px;

  ${({isDesktop}) =>
    isDesktop &&
    css`
      padding: 12px 40px;
      font-size: 28px;
      line-height: 38px;
      letter-spacing: -0.5px;
      margin-bottom: 32px;
    `}
`;
