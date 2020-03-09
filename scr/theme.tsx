import { createMuiTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    nprogress: {
      color: React.CSSProperties['color'];
    };
  }
  interface ThemeOptions {
    nprogress: {
      color: React.CSSProperties['color'];
    };
  }
}

// Create a theme instance.
const theme = createMuiTheme({
  nprogress: {
    color: '#9e0068',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          minHeight: '100%',
        },
        body: {
          padding: 0,
          background:
            'linear-gradient(to top left, #ff91da, #fd75cf, #e84db3)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
        },
      },
    },
    MuiList: {
      root: {
        outline: 'none',
      },
    },
    MuiInput: {
      root: {
        '& :-webkit-autofill, & :-webkit-autofill:hover, & :-webkit-autofill:focus, & :-webkit-autofill:active': {
          '-webkit-box-shadow': '0 0 0px 1000px #fff inset !important',
          '-webkit-text-fill-color': 'white',
        },
      },
    },
  },
});

export default theme;
