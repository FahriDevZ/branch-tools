import React from 'react';
import clsx from 'clsx';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  gutters: {
    margin: theme.spacing(2),
  },
  center: {
    textAlign: 'center',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  circularIndeterminate: {
    animation: '$mui-progress-circular-rotate 1s linear infinite',
  },
  '@keyframes mui-progress-circular-rotate': {
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
}));

interface LoadingCircularProps extends CircularProgressProps {
  center?: boolean;
  disableGutters?: boolean;
}

const LoadingCircular: React.FC<LoadingCircularProps> = props => {
  const classes = useStyles();
  const {
    classes: classesProps,
    className: classNameProp,
    style: styleProp,
    disableGutters,
    center,
    color,
    ...other
  } = props;

  let classesProgress = {
    indeterminate: classes.circularIndeterminate,
  };

  if (classesProps) {
    const { indeterminate, ...otherClasses } = classesProps;
    classesProgress = { ...classesProgress, ...otherClasses };
    if (indeterminate) {
      classesProgress.indeterminate = clsx(classesProgress.indeterminate, indeterminate);
    }
  }

  return (
    <div
      style={styleProp}
      className={clsx(
        {
          [classes.center]: center,
          [classes.gutters]: !disableGutters,
        },
        classNameProp,
      )}
    >
      <CircularProgress
        size={55}
        color={color || 'secondary'}
        classes={classesProgress}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...other}
      />
    </div>
  );
};

export default LoadingCircular;
