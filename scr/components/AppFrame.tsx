import React from 'react';
import { NextComponentType } from 'next';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppLayout from './AppLayout';
import NProgress from 'nprogress';
import NProgressBar from './NProgressBar';
import Router from 'next/router';
import { PageTheme } from '../utils/types';

export declare interface AppFrameProps {
  mainComponent: NextComponentType & PageTheme;
  children?: React.ReactNode;
  theme: any;
}

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const AppFrame: React.FC<AppFrameProps> = ({ children, theme, mainComponent: Component }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NProgressBar />
      <AppLayout size={Component.pageSize}>{children}</AppLayout>
    </ThemeProvider>
  );
};

export default AppFrame;
