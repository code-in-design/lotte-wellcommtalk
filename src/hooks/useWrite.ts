import pageContainerState from '@/atoms/pageContainer';
import {useCallback} from 'react';
import {useRecoilValue} from 'recoil';

interface UseWriteParams {
  onClose: () => void;
  isDesktop: boolean;
}

const useWrite = ({onClose, isDesktop}: UseWriteParams) => {
  const pageContainer = useRecoilValue(pageContainerState);

  const onAfterWrite = useCallback(() => {
    if (!pageContainer) return;

    if (isDesktop) {
      onClose();
    } else {
      history.back();
    }
    alert('등록이 완료되었습니다');

    setTimeout(() => {
      pageContainer.scrollIntoView({
        block: isDesktop ? 'center' : 'start',
        behavior: 'smooth',
      });
    }, 100);
  }, [isDesktop, onClose, pageContainer]);

  return {onAfterWrite};
};

export default useWrite;
