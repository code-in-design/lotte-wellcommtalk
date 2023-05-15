import {useCallback} from 'react';
import {useSetRecoilState} from 'recoil';
import {modalState} from '@/atoms/modal';
import {LoadableComponent} from '@loadable/component';
import loadable from '@loadable/component';
import {ImageZoomModalProps} from '@/components/Modals/ImageZoomModal/ImageZoomModal';
import {CommonModalProps} from '@/components/Modals/Modals.types';

const WriteDesktopModal = loadable(
  () => import('@/components/Modals/WriteModal/WriteModal'),
);
const WriteMobileModal = loadable(
  () => import('@/components/Modals/WriteMobileModal/WriteMobileModal'),
);
const DetailDesktopModal = loadable(
  () => import('@/components/Modals/DetailModal/DetailModal'),
);
const DetailMobileModal = loadable(
  () => import('@/components/Modals/DetailMobileModal/DetailMobileModal'),
);
const ImageZoomModal = loadable(
  () => import('@/components/Modals/ImageZoomModal/ImageZoomModal'),
);

export const useModal = () => {
  const setModal = useSetRecoilState(modalState);

  const openModal = useCallback(
    <T extends CommonModalProps>(
      Component: LoadableComponent<T>,
      props?: Omit<T, 'onClose'>,
    ) => {
      setModal(modals => [...modals, {Component, props}]);
    },
    [setModal],
  );
  const closeModal = useCallback(
    <T extends CommonModalProps>(Component: LoadableComponent<T>) => {
      setModal(modals => {
        return modals.filter(modal => modal.Component !== Component);
      });
    },
    [setModal],
  );

  return {openModal, closeModal};
};

export const useWriteDesktopModal = () => {
  const {openModal, closeModal} = useModal();

  const openWriteDesktopModal = useCallback(() => {
    openModal(WriteDesktopModal);
  }, [openModal]);

  const closeWriteDesktopModal = useCallback(() => {
    closeModal(WriteDesktopModal);
  }, [closeModal]);

  return {openWriteDesktopModal, closeWriteDesktopModal};
};

export const useWriteMobileModal = () => {
  const {openModal, closeModal} = useModal();

  const openWriteMobileModal = useCallback(() => {
    openModal(WriteMobileModal);
    history.pushState(null, '', '/write');
  }, [openModal]);

  const closeWriteMobileModal = useCallback(() => {
    closeModal(WriteMobileModal);
  }, [closeModal]);

  return {openWriteMobileModal, closeWriteMobileModal};
};

export const useDetailDesktopModal = () => {
  const {openModal, closeModal} = useModal();

  const openDetailDesktopModal = useCallback(
    (postId: string) => {
      openModal(DetailDesktopModal, {postId});
    },
    [openModal],
  );

  const closeDetailDesktopModal = useCallback(() => {
    closeModal(DetailDesktopModal);
  }, [closeModal]);

  return {openDetailDesktopModal, closeDetailDesktopModal};
};

export const useDetailMobileModal = () => {
  const {openModal, closeModal} = useModal();

  const openDetailMobileModal = useCallback(
    (postId: string) => {
      openModal(DetailMobileModal, {postId});
      history.pushState(null, '', '/detail');
    },
    [openModal],
  );

  const closeDetailMobileModal = useCallback(() => {
    closeModal(DetailMobileModal);
  }, [closeModal]);

  return {openDetailMobileModal, closeDetailMobileModal};
};

interface OpenImageModalParams
  extends Pick<ImageZoomModalProps, 'imageUrl' | 'isDesktop'> {}

export const useImageZoomModal = () => {
  const {openModal, closeModal} = useModal();

  const openImgaeZoomModal = useCallback(
    ({imageUrl, isDesktop}: OpenImageModalParams) => {
      openModal(ImageZoomModal, {imageUrl, isDesktop});
      if (!isDesktop) {
        history.pushState(null, '', '/detail/image');
      }
    },
    [openModal],
  );

  const closeImageZoomModal = useCallback(() => {
    closeModal(ImageZoomModal);
  }, [closeModal]);

  return {openImgaeZoomModal, closeImageZoomModal};
};
