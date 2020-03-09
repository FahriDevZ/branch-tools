import React from 'react';
import clsx from 'clsx';
import qs from 'qs';
import Head from 'next/head';
import { NextPage } from 'next';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../scr/redux/reducers';
import { BranchAppState } from '../scr/redux/actions/types';
import { putBranchApp } from '../scr/redux/actions/branchApp';
import { makeStyles } from '@material-ui/core/styles';
import { PageTheme } from '../scr/utils/types';
import requestApi from '../scr/requestApi';
import keysToSnakeCase from '../server/utils/keysToSnakeCase';

interface ReduxState {
  appConfig: RootState['appConfig'];
  branchApp: RootState['branchApp'];
  session: RootState['session'];
}

const mapState = (state: ReduxState) => ({
  appConfig: state.appConfig,
  branchApp: state.branchApp,
  session: state.session,
});

const connector = connect(mapState);

type PageIndexProp = ConnectedProps<typeof connector>;

const useStyles = makeStyles(theme => ({
  paddingContent: {
    padding: theme.spacing(2),
  },
  filledNormalInput: {
    padding: theme.spacing(1),
  },
  filledNormalAdornedEnd: {
    paddingRight: 0,
  },
  input: {
    paddingLeft: theme.spacing(2),
  },
}));

const PageIndex: NextPage<PageIndexProp> & PageTheme = ({
  appConfig,
  branchApp,
  session,
  dispatch,
}) => {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [resultLink, setResultLink] = React.useState('');

  const refResultLink: React.RefObject<HTMLTextAreaElement> = React.createRef();

  const handleChangeBranchApp = (key: keyof BranchAppState, value: any) => {
    dispatch(putBranchApp({ [key]: value }));
  };

  React.useEffect(() => {
    dispatch(putBranchApp({ resultLink }));
  }, [dispatch, resultLink]);

  const onChangeInput = (key: keyof BranchAppState) => (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    handleChangeBranchApp(key, event.currentTarget.value);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    setLoading(true);
    try {
      const input = { ...branchApp };
      if (input.resultLink) delete input.resultLink;
      const request = requestApi();
      const response = await request({
        method: 'post',
        url: '/create-app',
        data: qs.stringify(keysToSnakeCase(input)),
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          authorization: `Bearer ${session}`,
        },
      });
      setResultLink(response.data.data);
    } catch (error) {
      // kesuen, ngenekno bae
      // eslint-disable-next-line no-alert
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box my={8}>
      <Head>
        <title>{appConfig.title}</title>
      </Head>
      <Paper elevation={3}>
        <div className={classes.paddingContent}>
          <h1>{appConfig.name}</h1>
        </div>
        <form onSubmit={onSubmit}>
          <div className={classes.paddingContent}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <FormControl variant={'outlined'} size={'small'} fullWidth>
                  <InputLabel htmlFor={'input-branch-user-id'}>
                    User ID
                    <span style={{ color: 'red' }}>*</span>
                  </InputLabel>
                  <OutlinedInput
                    id={'input-branch-user-id'}
                    type={'text'}
                    label={'User ID'}
                    value={branchApp.userId}
                    onChange={onChangeInput('userId')}
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={8}>
                <FormControl variant={'outlined'} size={'small'} fullWidth>
                  <InputLabel htmlFor={'input-branch-user-email'}>
                    User Email
                    <span style={{ color: 'red' }}>*</span>
                  </InputLabel>
                  <OutlinedInput
                    id={'input-branch-user-email'}
                    type={'email'}
                    label={'User Email'}
                    value={branchApp.userEmail}
                    onChange={onChangeInput('userEmail')}
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl variant={'outlined'} size={'small'} fullWidth>
                  <InputLabel htmlFor={'input-redirect-link'}>
                    Redirect Link
                    <span style={{ color: 'red' }}>*</span>
                  </InputLabel>
                  <OutlinedInput
                    id={'input-redirect-link'}
                    type={'url'}
                    label={'Redirect Link'}
                    value={branchApp.redirectLink}
                    onChange={onChangeInput('redirectLink')}
                    required
                  />
                </FormControl>
              </Grid>
            </Grid>
          </div>
          <Divider />
          <div className={classes.paddingContent}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl variant={'outlined'} fullWidth>
                  <InputLabel htmlFor={'input-branch-og-title'}>og_title</InputLabel>
                  <OutlinedInput
                    id={'input-branch-og-title'}
                    type={'text'}
                    label={'og_title'}
                    value={branchApp.ogTitle || ''}
                    onChange={onChangeInput('ogTitle')}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl variant={'outlined'} fullWidth>
                  <InputLabel htmlFor={'input-branch-og-image-url'}>og_image_url</InputLabel>
                  <OutlinedInput
                    id={'input-branch-og-image-url'}
                    type={'url'}
                    label={'og_image_url'}
                    value={branchApp.ogImageUrl || ''}
                    onChange={onChangeInput('ogImageUrl')}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl variant={'outlined'} fullWidth>
                  <InputLabel htmlFor={'input-branch-og-description'}>og_description</InputLabel>
                  <OutlinedInput
                    id={'input-branch-og-description'}
                    type={'text'}
                    label={'og_description'}
                    value={branchApp.ogDescription || ''}
                    onChange={onChangeInput('ogDescription')}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <Button
                    variant={'contained'}
                    type={'submit'}
                    color={'secondary'}
                    disabled={loading}
                  >
                    {loading ? 'Loading cuk' : 'Submit'}
                  </Button>
                </FormControl>
              </Grid>
            </Grid>
          </div>
          <Divider />
          <div className={classes.paddingContent}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl variant={'filled'} fullWidth>
                  <FilledInput
                    id={'input-result-url'}
                    inputRef={refResultLink}
                    name={'input-result-url-original'}
                    type={'url'}
                    value={resultLink}
                    margin={'none'}
                    classes={{
                      input: clsx(classes.filledNormalInput, classes.input),
                      adornedEnd: classes.filledNormalAdornedEnd,
                    }}
                    autoComplete={'off'}
                    placeholder={'http://...'}
                    inputProps={{
                      'aria-label': 'result',
                      onClick: () => {
                        if (refResultLink && refResultLink.current) {
                          refResultLink.current.select();
                        }
                        document.execCommand('copy');
                      },
                    }}
                    endAdornment={
                      <InputAdornment position={'end'}>
                        <IconButton
                          aria-label={'Copy URL'}
                          onClick={() => {
                            if (refResultLink && refResultLink.current) {
                              refResultLink.current.select();
                            }
                            document.execCommand('copy');
                          }}
                        >
                          <FileCopyIcon fontSize={'default'} />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
            </Grid>
          </div>
        </form>
      </Paper>
    </Box>
  );
};

PageIndex.pageSize = 'msd';

export default connector(PageIndex);
