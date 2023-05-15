import {submitQuiz} from '@/api/quiz/quiz';
import {useMutation} from '@tanstack/react-query';

export const useSubmitQuiz = () => {
  return useMutation(submitQuiz, {
    onSuccess: ({isCorrect}) => {
      if (isCorrect) {
        alert('정답입니다. 제출되었습니다.');
      } else {
        alert('오답입니다. 다시 입력해주세요.');
      }
    },
  });
};
