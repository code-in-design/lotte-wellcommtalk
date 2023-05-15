import {css} from '@emotion/react';
import {colors} from './colors';
import fontStyles from './font.styles';
import modalStyles from './modal.styles';
import resetStyles from './reset.styles';

const globalStyles = css`
  ${resetStyles};
  ${fontStyles};
  ${modalStyles};

  * {
    box-sizing: border-box;
    font-family: 'Pretendard' !important;
  }

  body {
    background: ${colors.WHITE};
  }

  button {
    cursor: pointer;
    border: none;
    &:disabled {
      cursor: not-allowed;
    }
  }

  input,
  textarea {
    outline: none;
  }

  a {
    text-decoration: none;
    color: unset;
  }
`;

export default globalStyles;
