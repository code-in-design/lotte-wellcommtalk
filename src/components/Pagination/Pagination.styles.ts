import {colors} from '@/styles/colors';
import {css} from '@emotion/react';

const paginateStyles = css`
  ul {
    display: flex;
    gap: 4px;

    li {
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4px;
        cursor: pointer;

        width: 32px;
        height: 32px;

        border: 1px solid ${colors.BLACK};
        border-radius: 4px;

        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.3px;
      }
    }

    li.selected {
      a {
        background-color: ${colors.BLACK};
        color: ${colors.WHITE};
      }
    }
  }
`;

export default paginateStyles;
