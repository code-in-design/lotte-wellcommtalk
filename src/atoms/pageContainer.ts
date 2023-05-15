import {atom} from 'recoil';

const pageContainerState = atom<HTMLDivElement | null>({
  key: 'pageContainerRefState',
  default: null,
});

export default pageContainerState;
