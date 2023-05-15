import styled from '@emotion/styled';
import React from 'react';
import Header from './Header/Header';
import useInitialize from '@/hooks/useInitialize';

interface AppLayout extends IsDesktop {
  children: React.ReactNode;
}

const AppLayout = ({children, isDesktop}: AppLayout) => {
  const {isInitialize} = useInitialize();

  if (!isInitialize) {
    return null;
  }

  return (
    <SAppLayout isDesktop={isDesktop}>
      <Header isDesktop={isDesktop} />
      {children}
    </SAppLayout>
  );
};

export const SAppLayout = styled.div<IsDesktop>`
  margin-top: ${({isDesktop}) => (isDesktop ? '82px' : '62px')};
`;

export default AppLayout;
