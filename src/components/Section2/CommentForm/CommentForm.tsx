import {userState} from '@/atoms/user';
import ErrorMessage from '@/components/ErrorMessage';
import LoadingIndicator from '@/components/LoadingIndicator';
import {useCreateComment} from '@/hooks/useComments';
import React, {useCallback} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useRecoilValue} from 'recoil';
import {SCommentForm} from './CommentForm.styles';

export interface CheeringFormValue {
  content: string;
}

const CommentForm = ({isDesktop}: IsDesktop) => {
  const user = useRecoilValue(userState);
  const {
    register,
    handleSubmit,
    formState: {errors},
    resetField,
  } = useForm<CheeringFormValue>({
    defaultValues: {
      content: '',
    },
  });
  const {mutate: createComment, isLoading} = useCreateComment(resetField);

  const onSubmit: SubmitHandler<CheeringFormValue> = useCallback(
    ({content}) => {
      if (!user || isLoading) return;

      createComment({content, user});
    },
    [createComment, isLoading, user],
  );

  return (
    <SCommentForm onSubmit={handleSubmit(onSubmit)} isDesktop={isDesktop}>
      <div>
        <textarea
          {...register('content', {required: true})}
          placeholder="댓글 추가"
        />
        {errors.content && <ErrorMessage message="댓글을 작성해주세요." />}
      </div>
      <button disabled={isLoading}>
        {isLoading ? (
          <LoadingIndicator isDesktop={isDesktop} loading={true} />
        ) : (
          <span>전송</span>
        )}
      </button>
    </SCommentForm>
  );
};

export default CommentForm;
