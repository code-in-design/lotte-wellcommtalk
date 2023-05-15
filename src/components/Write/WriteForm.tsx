import {uploadImage} from '@/api/post/post';
import {userState} from '@/atoms/user';
import {useCreatePost} from '@/hooks/usePost';
import useUpload from '@/hooks/useUpload';
import Image from 'next/image';
import React, {useCallback, useRef} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useRecoilValue} from 'recoil';
import ErrorMessage from '../ErrorMessage';
import LoadingIndicator from '../LoadingIndicator';
import {
  RemoveWrapper,
  SWriteForm,
  UploadImageWrapper,
  WriteFormButton,
  WriteImageBlock,
  WriteImageContainer,
  WriteInputLabel,
  WriteLabel,
  WriteTextarea,
  WriteTitle,
} from './WriteForm.styles';
import {WriteFormValues, WriteProps} from './WriteForm.types';

const WriteForm = ({isDesktop, marginBottom, onAfterWrite}: WriteProps) => {
  const user = useRecoilValue(userState);
  const {
    register,
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<WriteFormValues>({
    defaultValues: {
      title: '',
      content: '',
      uploadImages: [],
    },
  });

  const ref = useRef<HTMLInputElement>(null);
  const onOpenUpload = useCallback(() => ref.current?.click(), []);

  const {fields, onUploadFiles, onRemoveFile} = useUpload({control});

  const {mutate: createPost, isLoading} = useCreatePost({
    isDesktop,
    onAfterWrite,
  });

  const onSubmit: SubmitHandler<WriteFormValues> = useCallback(
    async values => {
      if (isLoading || !user) return;

      const {title, content, uploadImages} = values;
      try {
        const results = uploadImages.map(data => uploadImage(data.file));
        const imageUrls = await Promise.all(results);

        createPost({
          title,
          content,
          imageUrls,
          writer: {employeeNumber: user.employeeNumber},
          userId: user.id,
        });
      } catch (err) {
        console.error(err);
      }
    },
    [createPost, isLoading, user],
  );

  return (
    <SWriteForm isDesktop={isDesktop} onSubmit={handleSubmit(onSubmit)}>
      <WriteTitle>
        {'롯데웰푸드의 주인공,\n우리 부서를 소개해주세요!'}
      </WriteTitle>

      <WriteInputLabel>
        <span>제목</span>
        <input
          {...register('title', {required: true})}
          placeholder="제목을 입력해주세요."
        />
        {errors.title && <ErrorMessage message="제목을 입력해주세요." />}
      </WriteInputLabel>

      <WriteLabel>
        <span>내용</span>
        <WriteTextarea
          {...register('content', {required: true})}
          placeholder="내용을 입력해주세요."
        />
        {errors.content && <ErrorMessage message="내용을 입력해주세요." />}
      </WriteLabel>

      <WriteLabel style={{marginBottom: marginBottom ?? 32}}>
        <span>
          사진
          <p>(최대 3장 등록가능, 보안문서의 경우 암호화해제 후 등록 필요)</p>
        </span>

        <WriteImageContainer isDesktop={isDesktop}>
          {fields.map((uploadFile, i) => (
            <UploadImageWrapper key={uploadFile.id}>
              <Image src={uploadFile.cacheImgPath} fill alt="" />
              <RemoveWrapper onClick={onRemoveFile(i)}>
                <Image
                  src="/assets/images/post/icon_x.png"
                  width={12}
                  height={12}
                  alt=""
                />
              </RemoveWrapper>
            </UploadImageWrapper>
          ))}

          {[...Array(3 - fields.length)].map((_, i) => (
            <WriteImageBlock key={i} onClick={onOpenUpload}>
              <Image
                src="/assets/images/post/photo.png"
                width={24}
                height={24}
                alt=""
              />
              <div>사진불러오기</div>
            </WriteImageBlock>
          ))}
        </WriteImageContainer>
        {errors.uploadImages && <ErrorMessage message="사진을 첨부해주세요." />}
      </WriteLabel>
      <input
        {...register('uploadImages', {required: true})}
        type="file"
        multiple
        accept="image/*"
        hidden
        onChange={onUploadFiles}
        ref={ref}
        key={Date.now()}
      />

      <WriteFormButton disabled={isLoading}>
        {isLoading ? (
          <LoadingIndicator isDesktop={isDesktop} loading={true} />
        ) : (
          <span>등록하기</span>
        )}
      </WriteFormButton>
    </SWriteForm>
  );
};

export default WriteForm;
