import {isErrorWithData} from '@/api/api.types';
import {useJoin, useLogin} from '@/hooks/useUser';
import Image from 'next/image';
import React, {useCallback, useMemo} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import ErrorMessage from '../ErrorMessage';
import LoadingIndicator from '../LoadingIndicator';
import {
  LoginButton,
  LoginContainer,
  LoginInqueryText,
  SignBlock,
  SignForm,
  TextInputLabel,
  WellCommTalkWrapper,
} from './Sign.styles';

interface LoginFormValues {
  name: string;
  employeeNumber: string;
}

interface LoginProps extends IsDesktop {
  isLogin?: boolean;
}

const Sign = ({isLogin, isDesktop}: LoginProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<LoginFormValues>({
    defaultValues: {
      name: '',
      employeeNumber: '',
    },
  });

  const {
    mutate: login,
    isLoading: loginLoading,
    error: loginError,
  } = useLogin();
  const {mutate: join, isLoading: joinLoading} = useJoin(reset);

  const isLoading = useMemo(
    () => loginLoading || joinLoading,
    [joinLoading, loginLoading],
  );

  const onSubmit: SubmitHandler<LoginFormValues> = useCallback(
    values => {
      if (isLogin) {
        login(values);
      } else {
        join(values);
      }
    },
    [isLogin, join, login],
  );

  return (
    <LoginContainer isDesktop={isDesktop}>
      <SignBlock isDesktop={isDesktop}>
        <WellCommTalkWrapper isDesktop={isDesktop}>
          {isDesktop ? (
            <Image
              src="/assets/images/login/wellcomm_talk.png"
              fill
              alt="wellcomm_talk"
            />
          ) : (
            <Image
              src="/assets/images/login/wellcomm_talk_mobile.png"
              fill
              alt="wellcomm_talk"
            />
          )}
        </WellCommTalkWrapper>

        <SignForm onSubmit={handleSubmit(onSubmit)} isDesktop={isDesktop}>
          <TextInputLabel>
            <span>이름</span>
            <input
              {...register('name', {required: true})}
              placeholder="이름을 입력해주세요."
            />
            {errors.name && <ErrorMessage message="이름을 입력해주세요." />}
          </TextInputLabel>

          <TextInputLabel>
            <span>사번</span>
            <input
              {...register('employeeNumber', {required: true})}
              placeholder="통합 사번을 입력해주세요."
            />
            {errors.employeeNumber && (
              <ErrorMessage message="통합 사번을 입력해주세요." />
            )}
            {isErrorWithData(loginError) && (
              <ErrorMessage message={loginError.response.data.message} />
            )}
          </TextInputLabel>

          <LoginButton isDesktop={isDesktop} disabled={isLoading}>
            {isLoading ? (
              <LoadingIndicator isDesktop={isDesktop} loading={true} />
            ) : (
              <span>{isLogin ? '로그인' : '회원가입'}</span>
            )}
          </LoginButton>

          {isLogin && (
            <LoginInqueryText isDesktop={isDesktop}>
              {
                '※ 통합 사번 확인이 어려운 경우 각 지원담당에게 문의해\n주시기 바랍니다.'
              }
            </LoginInqueryText>
          )}
        </SignForm>
      </SignBlock>
    </LoginContainer>
  );
};

export default Sign;
