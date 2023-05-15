import {useRecoilValue} from 'recoil';
import {modalState} from '@/atoms/modal';
import {useModal} from '@/hooks/useModal';

const Modals = () => {
  const opendModals = useRecoilValue(modalState);
  const {closeModal} = useModal();

  return (
    <>
      {opendModals.map((modal, index) => {
        const {Component, props} = modal;
        const {onConfirm, onCancel, ...restProps} = props ?? {};

        const onClose = () => closeModal(Component);

        const confirm = () => {
          if (typeof onConfirm === 'function') {
            onConfirm();
          }
          onClose();
        };

        return (
          <Component
            key={index}
            onClose={onClose}
            onConfirm={confirm}
            {...restProps}
          />
        );
      })}
    </>
  );
};

export default Modals;
