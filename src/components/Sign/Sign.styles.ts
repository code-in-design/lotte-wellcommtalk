import {colors} from '@/styles/colors';
import {css} from '@emotion/react';
import styled from '@emotion/styled';

export const LoginContainer = styled.div<IsDesktop>`
  background: url('/assets/images/login/background_mobile.png') center;
  background-size: cover;

  ${({isDesktop}) =>
    isDesktop &&
    css`
      background: url('/assets/images/login/background_desktop.png') center;
      background-size: cover;
    `}
`;

export const LoginBlock = styled.div<IsDesktop>`
  width: 343px;
  margin: 0 auto;

  padding-top: 112px;
  padding-bottom: 229px;

  form {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  ${({isDesktop}) =>
    isDesktop &&
    css`
      width: 542px;
      padding-top: 100px;
      padding-bottom: 227px;
    `}
`;

export const TextBlock = styled.div<IsDesktop>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 48px;

  font-weight: 400;
  font-size: 36px;
  line-height: 48px;

  b {
    font-weight: 800;
  }

  ${({isDesktop}) =>
    isDesktop &&
    css`
      margin-bottom: 72px;
      font-size: 60px;
      line-height: 74px;
    `}
`;

export const TextInputLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: start;

  span {
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.2px;
    margin-bottom: 8px;
  }

  input {
    padding: 12px 20px;

    width: 100%;
    height: 48px;
    background-color: ${colors.WHITE};
    border: 1px solid ${colors.GRAY100};
    border-radius: 8px;

    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.3px;

    &::placeholder {
      color: ${colors.GRAY300};
    }
  }
`;

export const LoginButton = styled.button<IsDesktop>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 48px;

  background: ${colors.MAIN_COLOR};
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.3px;
  color: ${colors.WHITE};

  ${({isDesktop}) =>
    isDesktop &&
    css`
      height: 64px;
      font-size: 18px;
      line-height: 26px;
    `}
`;

export const LoginInqueryText = styled.p<IsDesktop>`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.2px;
  color: ${colors.GRAY400};
  margin-top: 16px;

  ${({isDesktop}) =>
    isDesktop &&
    css`
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      letter-spacing: -0.3px;
    `}
`;
