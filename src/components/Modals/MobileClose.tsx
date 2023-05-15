import Image from 'next/image';
import React from 'react';

interface MobileCloseProps {
  onClose: () => void;
}

const MobileClose = ({onClose}: MobileCloseProps) => {
  return (
    <Image
      src="/assets/images/post/icon_x_black.png"
      width={24}
      height={24}
      alt="close"
      onClick={onClose}
    />
  );
};

export default MobileClose;
