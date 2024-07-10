import { FC, useEffect, useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import type { AppInitialProps, AppProps } from 'next/app';
import axios from 'axios';
import Router from 'next/router';
import NProgress from 'nprogress';
import { Provider as ReduxProvider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Hydrate } from 'react-query/hydration';
import App from '../components/App';
import { store } from '../store';
import AuthPopup from '../components/Auth';
import currentTheme, { Theme } from '../theme';
import { config } from '../utils';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../../../next-i18next.config.js';
axios.defaults.baseURL = config.apiUrl;
axios.defaults.withCredentials = true;

const NextApp: FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState<Theme>(null);
  const queryClientRef = useRef(null);
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    });
  }

  useEffect(() => {
    const nProgressStart = () => NProgress.start();
    const nProgressDone = () => NProgress.done();

    // N Progress.
    Router.events.on('routeChangeStart', nProgressStart);
    Router.events.on('routeChangeComplete', nProgressDone);
    Router.events.on('routeChangeError', nProgressDone);

    return () => {
      // N Progress.
      Router.events.on('routeChangeStart', nProgressStart);
      Router.events.on('routeChangeComplete', nProgressDone);
      Router.events.on('routeChangeError', nProgressDone);
    };
  }, []);

  return (
    <>
      <QueryClientProvider client={queryClientRef.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <ReduxProvider store={store}>
            <ThemeProvider theme={theme || currentTheme}>
              <I18nextProvider i18n={i18n}>
                <App setTheme={setTheme}>
                  <Component {...pageProps} />
                </App>
              </I18nextProvider>
              <AuthPopup />
            </ThemeProvider>
          </ReduxProvider>
        </Hydrate>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};

export default appWithTranslation(NextApp, nextI18NextConfig);
// export default NextApp;
