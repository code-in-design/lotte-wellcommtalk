import Image from 'next/image';
import React from 'react';
import {HeaderBlock} from './Header.styles';

const Header = ({isDesktop}: IsDesktop) => {
  return (
    <HeaderBlock isDesktop={isDesktop}>
      <Image src="/assets/images/header/logo.png" width={isDesktop ? 120 : 75} height={isDesktop ? 32 : 20} alt="logo" priority />
    </HeaderBlock>
  );
};

export default Header;
