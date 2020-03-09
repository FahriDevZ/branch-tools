import React from 'react';
import clsx from 'clsx';
import { Omit } from '../utils/types';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import SnackbarContent, { SnackbarContentProps } from '@material-ui/core/SnackbarContent';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import makeStyles from '@material-ui/core/styles/makeStyles';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

type CustomSnackbarContentProps = Omit<SnackbarContentProps, 'variant'>;

export type SnackbarVariant = keyof typeof variantIcon;

export declare interface SnackbarContentWrapperProps extends CustomSnackbarContentProps {
  variant: Partial<SnackbarVariant>;
  onClose?: React.MouseEventHandler<any>;
}

const useStyles = makeStyles(theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
  defaultColor: {
    color: theme.palette.common.white,
  },
}));

const SnackbarContentWrapper: React.FC<SnackbarContentWrapperProps> = props => {
  const classes = useStyles();
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  const handleOnClose: React.MouseEventHandler<any> = event => {
    if (onClose instanceof Function) {
      onClose(event);
    }
  };

  return (
    <SnackbarContent
      className={clsx(classes.defaultColor, classes[variant], className)}
      aria-describedby={'client-snackbar'}
      message={
        <span id={'client-snackbar'} className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton key={'close'} aria-label={'Close'} color={'inherit'} onClick={handleOnClose}>
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...other}
    />
  );
};

export default SnackbarContentWrapper;
