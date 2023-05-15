import {WriteFormValues} from '@/components/Write/WriteForm.types';
import {ChangeEvent, useCallback} from 'react';
import {Control, useFieldArray} from 'react-hook-form';

interface UseUploadParams {
  control: Control<WriteFormValues>;
}

const useUpload = ({control}: UseUploadParams) => {
  const {fields, append, remove} = useFieldArray({
    control,
    name: 'uploadImages',
  });

  const onUploadFiles = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const {files} = e.target;
      if (!files) return;
      if (files.length > 3) {
        alert('업로드 가능한 사진의 개수는 최대 3개입니다.');
      }

      [...files].forEach((file, i) => {
        if (i > 2) return;
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
          if (!reader.result) return;

          append({file, cacheImgPath: reader.result as string});
        };
      });
    },
    [append],
  );

  const onRemoveFile = useCallback(
    (index: number) => () => {
      remove(index);
    },
    [remove],
  );

  return {fields, onUploadFiles, onRemoveFile};
};

export default useUpload;
