import React from 'react';
import { NextPage } from 'next';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { useRouter } from 'next/router';
import makeStyles from '@material-ui/core/styles/makeStyles';
import LoadingCircular from '../scr/components/LoadingCircular';
import { connect, ConnectedProps } from 'react-redux';
import { setSession } from '../scr/redux/actions/session';

const connector = connect();

type LoginPageProps = ConnectedProps<typeof connector>;

const useStyles = makeStyles({
  paper: {
    margin: 100,
    padding: 50,
  },
});

const LogoutPage: NextPage<LoginPageProps> = ({ dispatch }) => {
  const classes = useStyles();
  const router = useRouter();

  React.useEffect(() => {
    dispatch(setSession(null));
    router.replace('/login');
  });

  return (
    <Box my={8}>
      <Paper className={classes.paper}>
        <LoadingCircular size={60} center disableGutters disableShrink />
      </Paper>
    </Box>
  );
};

export default connector(LogoutPage);
