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
import NativeSelect from '@material-ui/core/NativeSelect';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../scr/redux/reducers';
import { BranchAppState, ShareLinkApp } from '../scr/redux/actions/types';
import { putBranchApp } from '../scr/redux/actions/branchApp';
import { putShareLink } from '../scr/redux/actions/shareLink';
import { makeStyles } from '@material-ui/core/styles';
import { PageTheme } from '../scr/utils/types';
import requestApi from '../scr/requestApi';
import keysToSnakeCase from '../server/utils/keysToSnakeCase';

interface ReduxState {
  appConfig: RootState['appConfig'];
  branchApp: RootState['branchApp'];
  session: RootState['session'];
  shareLink: RootState['shareLink'];
}

const mapState = (state: ReduxState) => ({
  appConfig: state.appConfig,
  branchApp: state.branchApp,
  session: state.session,
  shareLink: state.shareLink,
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
  selectInputNative: {
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    fontSize: 16,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
  },
}));

const FacebookAppCollections: ShareLinkApp[] = [
  { id: 200368456664008, name: 'We Heart It' },
  { id: 87741124305, name: 'Youtube' },
  { id: 166222643790489, name: 'Metacafe' },
  { id: 462754987849668, name: 'Flickr.com' },
  { id: 187960271237149, name: 'Detik.com' },
  { id: 160621007401976, name: 'Liputan6.com' },
  { id: 324557847592228, name: 'Kompas.com' },
  { id: 332404380172618, name: 'Tempo.co' },
];

const PageIndex: NextPage<PageIndexProp> & PageTheme = ({
  appConfig,
  branchApp,
  session,
  shareLink,
  dispatch,
}) => {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [resultLink, setResultLink] = React.useState(shareLink.originalLink || '');
  const [selectedApp, setSelectedApp] = React.useState(0);

  const refResultLink: React.RefObject<HTMLTextAreaElement> = React.createRef();
  const refResultLinkPost: React.RefObject<HTMLTextAreaElement> = React.createRef();
  const ElementListApp: any[] = [];

  FacebookAppCollections.forEach((item, key) => {
    ElementListApp.push(
      <option value={key} key={ElementListApp.length}>
        {item.name}
      </option>,
    );
  });

  const handleChangeBranchApp = (key: keyof BranchAppState, value: any) => {
    dispatch(putBranchApp({ [key]: value }));
  };

  React.useEffect(() => {
    const app = FacebookAppCollections[selectedApp];
    if (app !== undefined) {
      if (resultLink && resultLink !== '') {
        const query = new URLSearchParams(
          keysToSnakeCase({
            appId: app.id,
            display: 'popup',
            href: resultLink,
          }),
        );
        const appLink = `https://www.facebook.com/dialog/share?${query.toString()}`;
        dispatch(putShareLink({ app, appLink, originalLink: resultLink }));
      } else {
        dispatch(putShareLink({ app, originalLink: resultLink }));
      }
    }
  }, [dispatch, selectedApp, resultLink]);

  const onChangeInput = (key: keyof BranchAppState) => (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    handleChangeBranchApp(key, event.currentTarget.value);
  };

  const onChangeApp = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const index = parseInt(event.currentTarget.value as string, 10);
    setSelectedApp(index);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    setLoading(true);
    try {
      const request = requestApi();
      const response = await request({
        method: 'post',
        url: '/create-app',
        data: qs.stringify(keysToSnakeCase(branchApp)),
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
                <FormControl variant={'outlined'} size={'small'} fullWidth>
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
                <FormControl variant={'outlined'} size={'small'} fullWidth>
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
                <FormControl variant={'outlined'} size={'small'} fullWidth>
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
                <FormControl variant={'filled'} size={'small'} fullWidth>
                  <FilledInput
                    id={'input-result-url'}
                    inputRef={refResultLink}
                    name={'input-result-url'}
                    type={'url'}
                    value={shareLink.originalLink}
                    margin={'none'}
                    classes={{
                      input: clsx(classes.filledNormalInput, classes.input),
                      adornedEnd: classes.filledNormalAdornedEnd,
                    }}
                    autoComplete={'off'}
                    placeholder={'http://...'}
                    inputProps={{
                      'aria-label': 'Post URL',
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
              <Grid item xs={4}>
                <FormControl variant={'filled'} fullWidth>
                  <NativeSelect
                    value={selectedApp}
                    onChange={onChangeApp}
                    name={'language'}
                    inputProps={{ 'aria-label': 'Language' }}
                    classes={{ select: classes.selectInputNative }}
                  >
                    {ElementListApp}
                  </NativeSelect>
                </FormControl>
              </Grid>
              <Grid item xs={8}>
                <FormControl variant={'filled'} fullWidth>
                  <FilledInput
                    id={'input-result-url-post'}
                    inputRef={refResultLinkPost}
                    name={'input-result-url-post'}
                    type={'url'}
                    value={shareLink.appLink}
                    margin={'none'}
                    classes={{
                      input: clsx(classes.filledNormalInput, classes.input),
                      adornedEnd: classes.filledNormalAdornedEnd,
                    }}
                    autoComplete={'off'}
                    placeholder={'http://...'}
                    inputProps={{
                      'aria-label': 'Post URL',
                      onClick: () => {
                        if (refResultLinkPost && refResultLinkPost.current) {
                          refResultLinkPost.current.select();
                        }
                        document.execCommand('copy');
                      },
                    }}
                    endAdornment={
                      <InputAdornment position={'end'}>
                        <IconButton
                          aria-label={'Copy URL'}
                          onClick={() => {
                            if (refResultLinkPost && refResultLinkPost.current) {
                              refResultLinkPost.current.select();
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
