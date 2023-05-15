import {userState} from '@/atoms/user';
import ErrorMessage from '@/components/ErrorMessage';
import LoadingIndicator from '@/components/LoadingIndicator';
import {useCreateCheeringMessage} from '@/hooks/useCheeringMessage';
import React, {useCallback} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useRecoilValue} from 'recoil';
import {CheeringForm} from './CheeringMessageForm.styles';

export interface CheeringFormValue {
  content: string;
}

const CheeringMessageFom = ({isDesktop}: IsDesktop) => {
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
  const {mutate: createCheeringMessage, isLoading} =
    useCreateCheeringMessage(resetField);

  const onSubmit: SubmitHandler<CheeringFormValue> = useCallback(
    ({content}) => {
      if (!user || isLoading) return;

      createCheeringMessage({content, user});
    },
    [createCheeringMessage, isLoading, user],
  );

  return (
    <CheeringForm onSubmit={handleSubmit(onSubmit)} isDesktop={isDesktop}>
      <div>
        <textarea
          {...register('content', {required: true})}
          placeholder="축하/응원의 메시지를 남겨주세요!"
        />
        {errors.content && (
          <ErrorMessage message="축하/응원의 메시지를 남겨주세요!" />
        )}
      </div>
      <button disabled={isLoading}>
        {isLoading ? (
          <LoadingIndicator isDesktop={isDesktop} loading={true} />
        ) : (
          <span>전송</span>
        )}
      </button>
    </CheeringForm>
  );
};

export default CheeringMessageFom;
