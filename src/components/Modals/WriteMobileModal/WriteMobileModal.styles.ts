import {colors} from '@/styles/colors';
import styled from '@emotion/styled';

export const MobileWriteHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  height: 62px;
  padding: 19px 16px;
  border-bottom: 1px solid ${colors.GRAY100};

  background-color: ${colors.WHITE};
  z-index: 101;

  img {
    cursor: pointer;
    display: block;
    margin-left: auto;
  }
`;
