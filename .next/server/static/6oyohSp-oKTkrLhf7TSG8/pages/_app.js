module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+Oll":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

// Create a theme instance.
const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  nprogress: {
    color: '#9e0068'
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          minHeight: '100%'
        },
        body: {
          padding: 0,
          background: 'linear-gradient(to top left, #ff91da, #fd75cf, #e84db3)'
          /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        }
      }
    },
    MuiList: {
      root: {
        outline: 'none'
      }
    },
    MuiInput: {
      root: {
        '& :-webkit-autofill, & :-webkit-autofill:hover, & :-webkit-autofill:focus, & :-webkit-autofill:active': {
          '-webkit-box-shadow': '0 0 0px 1000px #fff inset !important',
          '-webkit-text-fill-color': 'white'
        }
      }
    }
  }
});
/* harmony default export */ __webpack_exports__["a"] = (theme);

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "8//M":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/makeStyles");

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "AJJM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("g/15");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, Object.assign({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "EMPA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SET_APP_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PUT_APP_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SET_SESSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SET_BRANCH_APP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PUT_BRANCH_APP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SET_SHARE_LINK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PUT_SHARE_LINK; });
const SET_APP_CONFIG = '@AppConfig/SET';
const PUT_APP_CONFIG = '@AppCongig/PUT';
const SET_SESSION = '@Session/SET';
const SET_BRANCH_APP = '@BranchApp/SET';
const PUT_BRANCH_APP = '@BranchApp/PUT';
const SET_SHARE_LINK = '@ShareLink/SET';
const PUT_SHARE_LINK = '@ShareLink/PUT';

/***/ }),

/***/ "GvLQ":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "@material-ui/core/CssBaseline"
var CssBaseline_ = __webpack_require__("AJJM");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_);

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");
var external_next_redux_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_wrapper_);

// EXTERNAL MODULE: ./scr/redux/actions/types.ts
var types = __webpack_require__("EMPA");

// CONCATENATED MODULE: ./scr/redux/actions/appConfig.ts

function setAppConfig(appConfig) {
  return {
    type: types["d" /* SET_APP_CONFIG */],
    payload: appConfig
  };
}
function putAppConfig(appConfig) {
  return {
    type: types["a" /* PUT_APP_CONFIG */],
    meta: appConfig
  };
}
// EXTERNAL MODULE: ./scr/redux/actions/session.ts
var session = __webpack_require__("k/h2");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// CONCATENATED MODULE: ./scr/redux/reducers/session.ts

const initialStateSession = null;

const reducer = (state = initialStateSession, action) => {
  // using else-if condition because we only have one action type.
  if (action.type === types["f" /* SET_SESSION */]) {
    return action.payload;
  }

  return state;
};

/* harmony default export */ var reducers_session = (reducer);
// CONCATENATED MODULE: ./scr/redux/reducers/appConfig.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialStateAppConfig = {
  name: 'Hello World'
};

const appConfig_reducer = (state = initialStateAppConfig, action) => {
  switch (action.type) {
    case types["d" /* SET_APP_CONFIG */]:
      return action.payload;

    case types["a" /* PUT_APP_CONFIG */]:
      return _objectSpread({}, state, {
        [action.meta.key]: action.meta.value
      });

    default:
      return state;
  }
};

/* harmony default export */ var reducers_appConfig = (appConfig_reducer);
// CONCATENATED MODULE: ./scr/redux/reducers/branchApp.ts
function branchApp_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function branchApp_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { branchApp_ownKeys(Object(source), true).forEach(function (key) { branchApp_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { branchApp_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function branchApp_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialStateBranchApp = {
  userId: '',
  userEmail: '',
  redirectLink: ''
};

const branchApp_reducer = (state = initialStateBranchApp, action) => {
  switch (action.type) {
    case types["e" /* SET_BRANCH_APP */]:
      return action.payload;

    case types["b" /* PUT_BRANCH_APP */]:
      return branchApp_objectSpread({}, state, {}, action.meta);

    default:
      return state;
  }
};

/* harmony default export */ var branchApp = (branchApp_reducer);
// CONCATENATED MODULE: ./scr/redux/reducers/shareLink.ts
function shareLink_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function shareLink_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { shareLink_ownKeys(Object(source), true).forEach(function (key) { shareLink_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { shareLink_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function shareLink_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialStateShareLink = {
  appLink: '',
  originalLink: ''
};

const shareLink_reducer = (state = initialStateShareLink, action) => {
  switch (action.type) {
    case types["g" /* SET_SHARE_LINK */]:
      return action.payload;

    case types["c" /* PUT_SHARE_LINK */]:
      return shareLink_objectSpread({}, state, {}, action.meta);

    default:
      return state;
  }
};

/* harmony default export */ var shareLink = (shareLink_reducer);
// CONCATENATED MODULE: ./scr/redux/reducers/index.ts





const rootReducer = Object(external_redux_["combineReducers"])({
  session: reducers_session,
  appConfig: reducers_appConfig,
  branchApp: branchApp,
  shareLink: shareLink
});
/* harmony default export */ var reducers = (rootReducer);
// CONCATENATED MODULE: ./scr/redux/store.tsx
/* eslint-disable no-underscore-dangle */


 // Get the Redux DevTools extension and fallback to a no-op function

let devtools = x => x; // noinspection JSUnresolvedVariable


if (false) {}

const create = initialState => {
  let middleware = []; // noinspection JSUnresolvedVariable

  if (false // eslint-disable-line dot-notation
  ) {}

  return Object(external_redux_["createStore"])(reducers, initialState, // Hydrate the store with server-side data
  Object(external_redux_["compose"])(Object(external_redux_["applyMiddleware"])(external_redux_thunk_default.a, ...middleware), devtools));
};

const makeStore = initialState => {
  // Make sure to create a new store for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (true) {
    return create(initialState);
  } // Reuse store on the client-side


  if (!global.__INIT_REDUX_STORE__) {
    global.__INIT_REDUX_STORE__ = create(initialState);
  }

  return global.__INIT_REDUX_STORE__;
};

// eslint-disable-next-line import/prefer-default-export

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// EXTERNAL MODULE: external "@material-ui/core/styles/makeStyles"
var makeStyles_ = __webpack_require__("8//M");
var makeStyles_default = /*#__PURE__*/__webpack_require__.n(makeStyles_);

// CONCATENATED MODULE: ./scr/components/AppLayout.tsx
var __jsx = external_react_default.a.createElement;



const useStyle = makeStyles_default()(theme => ({
  root: {
    position: 'relative',
    flexGrow: 1,
    margin: 'auto',
    transition: 'all 200ms'
  },
  mediumSize: {
    [theme.breakpoints.up('lg')]: {
      maxWidth: theme.breakpoints.values.lg
    }
  },
  mediumSmallSize: {
    [theme.breakpoints.up('sm')]: {
      maxWidth: theme.breakpoints.values.sm + 200,
      marginTop: '.5rem'
    }
  },
  smallSize: {
    [theme.breakpoints.up('sm')]: {
      maxWidth: theme.breakpoints.values.sm,
      marginTop: '.5rem'
    }
  }
}));

const AppLayout = ({
  children,
  size
}) => {
  const classes = useStyle();
  if (!size) size = 'sm';
  return __jsx("div", {
    className: external_clsx_default()(classes.root, {
      [classes.smallSize]: size === 'sm',
      [classes.mediumSmallSize]: size === 'msd',
      [classes.mediumSize]: size === 'md'
    })
  }, children);
};

/* harmony default export */ var components_AppLayout = (AppLayout);
// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__("GvLQ");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);

// EXTERNAL MODULE: external "@material-ui/core/NoSsr"
var NoSsr_ = __webpack_require__("pKbc");
var NoSsr_default = /*#__PURE__*/__webpack_require__.n(NoSsr_);

// CONCATENATED MODULE: ./scr/components/NProgressBar.tsx
var NProgressBar_jsx = external_react_default.a.createElement;




external_nprogress_default.a.configure({
  template: `
    <div class="nprogress-bar" role="bar">
      <dt></dt>
      <dd></dd>
    </div>
  `
});

const styles = theme => {
  if (!theme.nprogress.color) {
    throw new Error('You need to provide a `theme.nprogress.color` property' + ' for using the `NProgressBar` component.');
  }

  return {
    '@global': {
      '#nprogress': {
        direction: 'ltr',
        pointerEvents: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        zIndex: theme.zIndex.tooltip,
        backgroundColor: '#e0e0e0',
        '& .nprogress-bar': {
          position: 'fixed',
          backgroundColor: theme.nprogress.color,
          top: 0,
          left: 0,
          right: 0,
          height: 2
        },
        '& dd, & dt': {
          position: 'absolute',
          top: 0,
          height: 2,
          boxShadow: `${theme.nprogress.color} 1px 0 6px 1px`,
          borderRadius: '100%',
          animation: 'nprogress-pulse 2s ease-out 0s infinite'
        },
        '& dd': {
          opacity: 0.6,
          width: 20,
          right: 0,
          clip: 'rect(-6px,22px,14px,10px)'
        },
        '& dt': {
          opacity: 0.6,
          width: 180,
          right: -80,
          clip: 'rect(-6px,90px,14px,-6px)'
        }
      },
      '@keyframes nprogress-pulse': {
        '30%': {
          opacity: 0.6
        },
        '60%': {
          opacity: 0
        },
        to: {
          opacity: 0.6
        }
      }
    }
  };
};

const GlobalStyles = Object(styles_["withStyles"])(styles, {
  flip: false
})(() => null);

/**
 * Elegant and ready to use wrapper on top of https://github.com/rstacruz/nprogress/.
 * The implementation is highly inspired by the YouTube one.
 */
const NProgressBar = props => {
  return NProgressBar_jsx(NoSsr_default.a, null, props.children, NProgressBar_jsx(GlobalStyles, null));
};

/* harmony default export */ var components_NProgressBar = (NProgressBar);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./scr/components/AppFrame.tsx
var AppFrame_jsx = external_react_default.a.createElement;







router_default.a.events.on('routeChangeStart', () => external_nprogress_default.a.start());
router_default.a.events.on('routeChangeComplete', () => external_nprogress_default.a.done());
router_default.a.events.on('routeChangeError', () => external_nprogress_default.a.done());

const AppFrame = ({
  children,
  theme,
  mainComponent: Component
}) => {
  return AppFrame_jsx(styles_["ThemeProvider"], {
    theme: theme
  }, AppFrame_jsx(CssBaseline_default.a, null), AppFrame_jsx(components_NProgressBar, null), AppFrame_jsx(components_AppLayout, {
    size: Component.pageSize
  }, children));
};

/* harmony default export */ var components_AppFrame = (AppFrame);
// EXTERNAL MODULE: ./scr/theme.tsx
var scr_theme = __webpack_require__("+Oll");

// CONCATENATED MODULE: ./pages/_app.tsx
var _app_jsx = external_react_default.a.createElement;












if (false) {}

class _app_MyApp extends app_default.a {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  static async getInitialProps({
    Component,
    ctx
  }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    if (ctx.isServer && ctx.res) {
      // Kulhuailek, di any ae wes eberes
      const res = ctx.res;
      const {
        siteConfig,
        signature
      } = res.locals;
      ctx.store.dispatch(setAppConfig({
        name: siteConfig.name,
        title: siteConfig.title,
        description: siteConfig.description
      })); // set user session to redux when avaiable

      if (signature) {
        ctx.store.dispatch(Object(session["a" /* setSession */])(signature));
      }
    }

    return {
      pageProps
    };
  }

  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    const currentState = store.getState();
    const appConfig = currentState.appConfig;
    return _app_jsx(external_react_default.a.Fragment, null, _app_jsx(head_default.a, null, _app_jsx("title", null, appConfig.title), appConfig.description && _app_jsx("meta", {
      name: 'description',
      content: appConfig.description
    })), _app_jsx(CssBaseline_default.a, null), _app_jsx(external_react_redux_["Provider"], {
      store: store
    }, _app_jsx(components_AppFrame, {
      theme: scr_theme["a" /* default */],
      mainComponent: Component
    }, _app_jsx(Component, pageProps))));
  }

}

/* harmony default export */ var _app = __webpack_exports__["default"] = (external_next_redux_wrapper_default()(makeStore, {
  debug: false
})(_app_MyApp));

/***/ }),

/***/ "dYMV":
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "k/h2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setSession; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("EMPA");
 // eslint-disable-next-line import/prefer-default-export

function setSession(session) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* SET_SESSION */ "f"],
    payload: session
  };
}

/***/ }),

/***/ "pKbc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/NoSsr");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });