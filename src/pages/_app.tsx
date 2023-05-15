import type {AppContext, AppInitialProps, AppProps} from 'next/app';
import {Global} from '@emotion/react';
import globalStyles from '@/styles/global.styles';
import Head from 'next/head';
import AppLayout from '@/components/AppLayout';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';

import {RecoilEnv, RecoilRoot} from 'recoil';
import Modal from 'react-modal';
import Modals from '@/components/Modals/Modals';

Modal.setAppElement('#__next');
if (process.env.NODE_ENV === 'development') {
  RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function App({Component, pageProps}: AppProps<IsDesktop>) {
  return (
    <>
      <Head>
        <title>LOTTE WELLFOOD</title>
      </Head>

      <Global styles={globalStyles} />

      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <AppLayout isDesktop={pageProps.isDesktop}>
            <Component {...pageProps} />

            <Modals />
            <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
          </AppLayout>
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}

App.getInitialProps = async ({ctx}: AppContext): Promise<AppInitialProps<IsDesktop>> => {
  const userAgent = ctx.req?.headers['user-agent'] ? ctx.req.headers['user-agent'] : navigator.userAgent;
  const isMobile = /(iPad|iPhone|Android|Mobile)/i.test(userAgent) || false;

  return {pageProps: {isDesktop: !isMobile}};
};
