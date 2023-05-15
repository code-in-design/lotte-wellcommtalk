import {isErrorWithData} from '@/api/api.types';
import {useJoin, useLogin} from '@/hooks/useUser';
import React, {useCallback, useMemo} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import ErrorMessage from '../ErrorMessage';
import LoadingIndicator from '../LoadingIndicator';
import {
  LoginBlock,
  LoginButton,
  LoginContainer,
  LoginInqueryText,
  TextBlock,
  TextInputLabel,
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
      <LoginBlock isDesktop={isDesktop}>
        <TextBlock isDesktop={isDesktop}>
          <span>{isLogin ? 'Welcome,' : 'Join'}</span>
          <b>LOTTE WELLFOOD</b>
        </TextBlock>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <TextInputLabel>
              <span>이름</span>
              <input
                {...register('name', {required: true})}
                placeholder="이름을 입력해주세요."
              />
            </TextInputLabel>
            {errors.name && <ErrorMessage message="이름을 입력해주세요." />}
          </div>

          <div>
            <TextInputLabel>
              <span>사번</span>
              <input
                {...register('employeeNumber', {required: true})}
                placeholder="통합 사번을 입력해주세요."
              />
            </TextInputLabel>
            {errors.employeeNumber && (
              <ErrorMessage message="통합 사번을 입력해주세요." />
            )}
            {isErrorWithData(loginError) && (
              <ErrorMessage message={loginError.response.data.message} />
            )}
          </div>

          <LoginButton isDesktop={isDesktop} disabled={isLoading}>
            {isLoading ? (
              <LoadingIndicator isDesktop={isDesktop} loading={true} />
            ) : (
              <span>{isLogin ? '로그인' : '회원가입'}</span>
            )}
          </LoginButton>
        </form>
        {isLogin && (
          <LoginInqueryText isDesktop={isDesktop}>
            ※ 통합 사번 확인이 어려운 경우 각 지원담당에게 문의해 주시기
            바랍니다.
          </LoginInqueryText>
        )}
      </LoginBlock>
    </LoginContainer>
  );
};

export default Sign;
