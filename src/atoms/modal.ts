import {LoadableComponent} from '@loadable/component';
import {atom} from 'recoil';

export interface ModalState {
  Component: LoadableComponent<any>;
  props: any;
}

export const modalState = atom<ModalState[]>({
  key: 'modalState',
  default: [],
});
