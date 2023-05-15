import {userState} from '@/atoms/user';
import ErrorMessage from '@/components/ErrorMessage';
import LoadingIndicator from '@/components/LoadingIndicator';
import {useSubmitQuiz} from '@/hooks/useQuiz';
import React, {useCallback} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useRecoilValue} from 'recoil';
import {SQuizForm} from './QuizForm.styles';

interface QuizaFormValue {
  content: string;
}

const QuizForm = ({isDesktop}: IsDesktop) => {
  const user = useRecoilValue(userState);
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<QuizaFormValue>({
    defaultValues: {
      content: '',
    },
  });

  const {mutate: submitQuiz, isLoading} = useSubmitQuiz();

  const onSubmit: SubmitHandler<QuizaFormValue> = useCallback(
    ({content}) => {
      if (!user) return;

      submitQuiz({userId: user.id, content});
    },
    [submitQuiz, user],
  );

  return (
    <SQuizForm onSubmit={handleSubmit(onSubmit)} isDesktop={isDesktop}>
      <div>
        <input
          {...register('content', {required: true})}
          placeholder="OOO에 들어갈 단어를 입력해 주세요."
        />
        {errors.content && (
          <ErrorMessage message="OOO에 들어갈 단어를 입력해 주세요." />
        )}
      </div>
      <button disabled={isLoading}>
        {isLoading ? (
          <LoadingIndicator isDesktop={isDesktop} loading={true} />
        ) : (
          <span>제출하기</span>
        )}
      </button>
    </SQuizForm>
  );
};

export default QuizForm;
