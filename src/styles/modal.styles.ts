import {css} from '@emotion/react';
import {colors} from './colors';
import Modal from 'react-modal';
import styled from '@emotion/styled';

const modalStyles = css`
  .ReactModal__Body--open {
    overflow: hidden;
  }

  .ReactModal__Overlay {
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.5) !important;
    z-index: 9999;
  }

  .ReactModal__Overlay {
    & > div {
      outline: none;
    }
  }
`;

export const commonModalStyles = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 622px;
  padding: 40px;
  display: flex;
  flex-direction: column;

  background: ${colors.WHITE};
  border-radius: 24px;
  box-shadow: 0px 9px 32px rgba(0, 0, 0, 0.15);
`;

export const MobileModal = styled(Modal)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: ${colors.WHITE};
  overflow: auto;
`;

export default modalStyles;
