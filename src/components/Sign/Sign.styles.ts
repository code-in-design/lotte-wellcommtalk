import {colors} from '@/styles/colors';
import {css} from '@emotion/react';
import styled from '@emotion/styled';

export const LoginContainer = styled.div<IsDesktop>`
  ${({isDesktop}) =>
    isDesktop &&
    css`
      background: url('/assets/images/login/sign_background.png') center;
      background-size: cover;
    `}
`;

export const SignBlock = styled.div<IsDesktop>`
  width: 343px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 42.75px;

  padding-top: 56px;
  padding-bottom: 24px;

  ${({isDesktop}) =>
    isDesktop &&
    css`
      width: 1056px;
      margin: 0 auto;
      height: calc(100vh - 82px);

      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      padding-top: 0;
      padding-bottom: 82px;
    `}
`;

export const WellCommTalkWrapper = styled.div<IsDesktop>`
  position: relative;
  min-height: 270px;

  img {
    object-fit: cover;
  }

  ${({isDesktop}) =>
    isDesktop &&
    css`
      width: 384px;
      height: 468px;
    `}
`;

export const SignForm = styled.form<IsDesktop>`
  padding: 20px;
  background: ${colors.GRAY50};
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  ${({isDesktop}) =>
    isDesktop &&
    css`
      width: 426px;
      padding: 24px;
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
  margin-top: -20px;
  white-space: pre-wrap;

  ${({isDesktop}) =>
    isDesktop &&
    css`
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.3px;
    `}
`;
