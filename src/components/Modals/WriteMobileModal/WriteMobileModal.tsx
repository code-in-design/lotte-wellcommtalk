import WriteForm from '@/components/Write/WriteForm';
import {MobileModal} from '@/styles/modal.styles';
import React, {useCallback, useEffect} from 'react';
import {MobileWriteHeader} from './WriteMobileModal.styles';
import useWrite from '@/hooks/useWrite';
import MobileClose from '../MobileClose';
import {CommonModalProps} from '../Modals.types';

const WriteMobileModal = ({onClose}: CommonModalProps) => {
  const {onAfterWrite} = useWrite({onClose: onClose, isDesktop: false});

  useEffect(() => {
    window.addEventListener('popstate', onClose);

    return () => {
      window.removeEventListener('popstate', onClose);
    };
  }, [onClose]);

  const onGoBack = useCallback(() => {
    history.back();
  }, []);

  return (
    <MobileModal isOpen>
      <MobileWriteHeader>
        <MobileClose onClose={onGoBack} />
      </MobileWriteHeader>

      <WriteForm
        isDesktop={false}
        marginBottom={13}
        onAfterWrite={onAfterWrite}
      />
    </MobileModal>
  );
};

export default WriteMobileModal;
