import styled from '@emotion/styled';
import Image from 'next/image';

interface CloseProps {
  onClose: () => void;
}

const Close = ({onClose}: CloseProps) => {
  return (
    <CloseIconWrapper onClick={onClose}>
      <Image
        src="/assets/images/post/icon_x.png"
        width={24}
        height={24}
        alt="close"
      />
    </CloseIconWrapper>
  );
};

const CloseIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.32);

  position: absolute;
  top: 0;
  right: -60px;
  cursor: pointer;
`;

export default Close;
