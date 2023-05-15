import {colors} from '@/styles/colors';
import {css} from '@emotion/react';
import styled from '@emotion/styled';

export const CheeringForm = styled.form<IsDesktop>`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 32px;

  div {
    flex: 1;
  }

  textarea {
    padding: 12px 20px;
    width: 100%;
    height: 72px;
    background: ${colors.WHITE};
    border: 1px solid ${colors.GRAY200};
    border-radius: 8px;

    resize: none;

    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.3px;

    &::placeholder {
      color: ${colors.BLACK};
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 48px;

    background: ${colors.MAIN_COLOR};
    border-radius: 8px;

    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.3px;
    color: ${colors.WHITE};
  }

  ${({isDesktop}) =>
    isDesktop &&
    css`
      flex-direction: row;
      margin-bottom: 64px;

      textarea {
        padding: 15px 24px;
        height: 82px;
      }

      button {
        width: 79px;
        height: 82px;

        font-size: 18px;
        line-height: 26px;
      }
    `}
`;
