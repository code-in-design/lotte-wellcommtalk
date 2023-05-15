import styled from '@emotion/styled';
import {MobileModal} from '@/styles/modal.styles';
import {colors} from '@/styles/colors';

export const ImageZoomModalBlock = styled(MobileModal)`
  overflow: unset;

  display: flex;
  flex-direction: column;
`;

export const ImageZoomModalHeder = styled.div`
  height: 62px;
  padding: 19px 16px;
  border-bottom: 1px solid ${colors.GRAY100};

  background-color: ${colors.WHITE};

  img {
    cursor: pointer;
    display: block;
    margin-left: auto;
  }
`;

export const ImageZoomBody = styled.div`
  position: relative;
  flex: 1;

  img {
    object-fit: contain;
  }
`;
