import React, { MouseEventHandler } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import { NextPage } from 'next';
import qs from 'qs';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import IconLoop from '@material-ui/icons/Loop';
import IconVisibility from '@material-ui/icons/Visibility';
import IconVisibilityOff from '@material-ui/icons/VisibilityOff';
import SnackbarContentWrapper, { SnackbarVariant } from '../scr/components/SnackbarContentWrapper';
import { connect, ConnectedProps } from 'react-redux';
import { setSession } from '../scr/redux/actions/session';
import { RootState } from '../scr/redux/reducers';
import requestApi from '../scr/requestApi';
import { PageTheme } from '../scr/utils/types';

interface ReduxState {
  appConfig: RootState['appConfig'];
}

const mapState = (state: ReduxState) => ({
  appConfig: state.appConfig,
});

const connector = connect(mapState);

type LoginPageProps = ConnectedProps<typeof connector>;

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: -theme.spacing(1),
    marginRight: -theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(5),
    position: 'relative',
    overflow: 'hidden',
  },
  img: {
    position: 'absolute',
    top: -15,
    right: -30,
    width: 173,
    opacity: 0.8,
  },
  '@keyframes animateTitle': {
    '0%': {
      transform: 'rotate(40deg) translateX(-162px)',
    },
    '20%': {
      transform: 'rotate(10deg) translateX(-162px)',
    },
    '100%': {
      transform: 'rotate(0deg) rotateY(0deg)',
    },
  },
  animateTitle: {
    'animation-name': '$animateTitle',
    'animation-duration': '0.5s',
    position: 'relative',
  },
  margin: {
    margin: theme.spacing(1),
  },
  '@keyframes munyer': {
    '0%': {
      transform: 'rotate(0deg) rotateY(180deg)',
    },
    '100%': {
      transform: 'rotate(360deg) rotateY(180deg)',
    },
  },
  munyer: {
    animation: '$munyer 0.8s linear infinite',
  },
}));

interface Alert {
  open: boolean;
  message: string;
  variant: SnackbarVariant;
}

const LoginPage: NextPage<LoginPageProps> & PageTheme = ({ appConfig, dispatch }) => {
  const classes = useStyles();
  const initAlert: Alert = { open: false, message: '', variant: 'warning' };
  const [alert, setAlert] = React.useState(initAlert);
  const [input, setInput] = React.useState({ password: '' });
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleChange = (key: string): React.ChangeEventHandler<HTMLInputElement> => event => {
    const newInput = { ...input, [key]: event.target.value };
    setInput(newInput);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setAlert(initAlert);
    setLoading(true);
    try {
      const request = requestApi();
      const response = await request({
        method: 'post',
        url: '/authenticate',
        data: qs.stringify(input),
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      });

      dispatch(setSession(response.data.data));
      Router.push('/');
    } catch (error) {
      setAlert({
        open: true,
        variant: 'error',
        message: error.message,
      });
      setLoading(false);
    }
  };

  const handleClose: MouseEventHandler<any> = () => {
    setAlert(initAlert);
  };

  return (
    <Box my={8}>
      <Head>
        <title>{appConfig.title}</title>
      </Head>
      <Paper elevation={3} className={classes.paper}>
        <img className={classes.img} src={'/images/monggo.gif'} alt={'Welcome'} />
        <h1 className={classes.animateTitle}>Welcome Beb</h1>
        <div style={{ position: 'relative' }}>
          {alert && alert.open && (
            <SnackbarContentWrapper
              style={{ marginBottom: 10 }}
              onClose={handleClose}
              variant={alert.variant}
              message={alert.message}
            />
          )}
          <form onSubmit={handleSubmit} className={classes.container}>
            <FormControl fullWidth className={classes.margin}>
              <InputLabel htmlFor={'input-password'}>Password</InputLabel>
              <Input
                id={'input-password'}
                type={showPassword ? 'text' : 'password'}
                value={input.password}
                onChange={handleChange('password')}
                autoComplete={'off'}
                endAdornment={
                  <InputAdornment position={'end'}>
                    <IconButton
                      color={'default'}
                      aria-label={'Toggle password visibility'}
                      onClick={handleClickShowPassword}
                    >
                      {showPassword ? <IconVisibility /> : <IconVisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl fullWidth className={classes.margin}>
              <Button variant={'contained'} type={'submit'} color={'secondary'} disabled={loading}>
                {loading && <IconLoop className={classes.munyer} />}Continue
              </Button>
            </FormControl>
          </form>
        </div>
      </Paper>
    </Box>
  );
};

LoginPage.pageSize = 'sm';

export default connector(LoginPage);
