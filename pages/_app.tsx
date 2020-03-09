import React from 'react';
import App, { AppContext } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import withRedux, { ReduxWrapperAppProps } from 'next-redux-wrapper';
import { setAppConfig } from '../scr/redux/actions/appConfig';
import { setSession } from '../scr/redux/actions/session';
import { makeStore, Store } from '../scr/redux/store';
import AppFrame from '../scr/components/AppFrame';
import theme from '../scr/theme';

if (process.browser) {
  // eslint-disable-next-line no-console
  console.log(
    `%c
Copyright © 2019 https://fahri.dev all right reserved.`,
    'font-family:monospace;color:#1976d2;font-size:12px;',
  );
}

class MyApp extends App<ReduxWrapperAppProps<Store>> {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  static async getInitialProps({ Component, ctx }: AppContext) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    if (ctx.isServer && ctx.res) {
      // Kulhuailek, di any ae wes eberes
      const res = ctx.res as any;
      const { siteConfig, signature } = res.locals;
      ctx.store.dispatch(
        setAppConfig({
          name: siteConfig.name,
          title: siteConfig.title,
          description: siteConfig.description,
        }),
      );

      // set user session to redux when avaiable
      if (signature) {
        ctx.store.dispatch(setSession(signature));
      }
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    const currentState = store.getState() as any;
    const appConfig = currentState.appConfig;

    return (
      <>
        <Head>
          <title>{appConfig.title}</title>
          {appConfig.description && <meta name={'description'} content={appConfig.description} />}
        </Head>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Provider store={store}>
          <AppFrame theme={theme} mainComponent={Component}>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
          </AppFrame>
        </Provider>
      </>
    );
  }
}

export default withRedux(makeStore, { debug: false })(MyApp);
