import WriteForm from '@/components/Write/WriteForm';
import useWrite from '@/hooks/useWrite';
import React from 'react';
import Close from '../Close';
import {CommonModalProps} from '../Modals.types';
import {WriteModalBlock} from './WriteModal.styles';

const WriteModal = ({onClose}: CommonModalProps) => {
  const {onAfterWrite} = useWrite({onClose: onClose, isDesktop: true});

  return (
    <WriteModalBlock isOpen>
      <Close onClose={onClose} />

      <WriteForm isDesktop onAfterWrite={onAfterWrite} />
    </WriteModalBlock>
  );
};

export default WriteModal;
