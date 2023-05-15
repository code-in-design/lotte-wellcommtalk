import {colors} from '@/styles/colors';
import {css} from '@emotion/react';
import styled from '@emotion/styled';

export const SQuizForm = styled.form<IsDesktop>`
  display: flex;
  flex-direction: column;
  gap: 12px;

  div {
    flex: 1;
  }

  input {
    width: 100%;
    height: 48px;
    padding: 12px 20px;

    border: 1px solid ${colors.GRAY200};
    border-radius: 8px;

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

      input {
        height: 56px;
        padding: 15px 24px;
        font-size: 18px;
        line-height: 26px;
        letter-spacing: -0.3px;
      }

      button {
        width: 110px;
        height: 56px;

        font-size: 18px;
        line-height: 26px;
        letter-spacing: -0.3px;
      }
    `}
`;
