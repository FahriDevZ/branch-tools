import React from 'react';
import clsx from 'clsx';
import makeStyles from '@material-ui/core/styles/makeStyles';

export declare interface AppLayoutProps {
  children: React.ReactNode;
  size?: string;
}

const useStyle = makeStyles(theme => ({
  root: {
    position: 'relative',
    flexGrow: 1,
    margin: 'auto',
    transition: 'all 200ms',
  },
  mediumSize: {
    [theme.breakpoints.up('lg')]: {
      maxWidth: theme.breakpoints.values.lg,
    },
  },
  mediumSmallSize: {
    [theme.breakpoints.up('sm')]: {
      maxWidth: theme.breakpoints.values.sm + 200,
      marginTop: '.5rem',
    },
  },
  smallSize: {
    [theme.breakpoints.up('sm')]: {
      maxWidth: theme.breakpoints.values.sm,
      marginTop: '.5rem',
    },
  },
}));

const AppLayout: React.FC<AppLayoutProps> = ({ children, size }) => {
  const classes = useStyle();

  if (!size) size = 'sm';

  return (
    <div
      className={clsx(classes.root, {
        [classes.smallSize]: size === 'sm',
        [classes.mediumSmallSize]: size === 'msd',
        [classes.mediumSize]: size === 'md',
      })}
    >
      {children}
    </div>
  );
};

export default AppLayout;
