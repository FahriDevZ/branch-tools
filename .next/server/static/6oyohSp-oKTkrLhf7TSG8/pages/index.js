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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("23aj");


/***/ }),

/***/ "23aj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// EXTERNAL MODULE: external "qs"
var external_qs_ = __webpack_require__("eW3l");
var external_qs_default = /*#__PURE__*/__webpack_require__.n(external_qs_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "@material-ui/core/Box"
var Box_ = __webpack_require__("ZkBw");
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);

// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__("qt1I");
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);

// EXTERNAL MODULE: external "@material-ui/core/FormControl"
var FormControl_ = __webpack_require__("lWoh");
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_);

// EXTERNAL MODULE: external "@material-ui/core/FilledInput"
var FilledInput_ = __webpack_require__("4VpM");
var FilledInput_default = /*#__PURE__*/__webpack_require__.n(FilledInput_);

// EXTERNAL MODULE: external "@material-ui/core/InputLabel"
var InputLabel_ = __webpack_require__("zOcm");
var InputLabel_default = /*#__PURE__*/__webpack_require__.n(InputLabel_);

// EXTERNAL MODULE: external "@material-ui/core/OutlinedInput"
var OutlinedInput_ = __webpack_require__("ZVla");
var OutlinedInput_default = /*#__PURE__*/__webpack_require__.n(OutlinedInput_);

// EXTERNAL MODULE: external "@material-ui/core/InputAdornment"
var InputAdornment_ = __webpack_require__("lj8g");
var InputAdornment_default = /*#__PURE__*/__webpack_require__.n(InputAdornment_);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__("EmCc");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/icons/FileCopy"
var FileCopy_ = __webpack_require__("UV9R");
var FileCopy_default = /*#__PURE__*/__webpack_require__.n(FileCopy_);

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__("JQ2V");
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/Divider"
var Divider_ = __webpack_require__("nybW");
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);

// EXTERNAL MODULE: external "@material-ui/core/NativeSelect"
var NativeSelect_ = __webpack_require__("zgji");
var NativeSelect_default = /*#__PURE__*/__webpack_require__.n(NativeSelect_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./scr/redux/actions/types.ts
var types = __webpack_require__("EMPA");

// CONCATENATED MODULE: ./scr/redux/actions/branchApp.ts

function setBranchApp(data) {
  return {
    type: types["e" /* SET_BRANCH_APP */],
    payload: data
  };
}
function putBranchApp(data) {
  return {
    type: types["b" /* PUT_BRANCH_APP */],
    meta: data
  };
}
// CONCATENATED MODULE: ./scr/redux/actions/shareLink.ts

function setShareLink(session) {
  return {
    type: types["g" /* SET_SHARE_LINK */],
    payload: session
  };
}
function putShareLink(data) {
  return {
    type: types["c" /* PUT_SHARE_LINK */],
    meta: data
  };
}
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: ./scr/requestApi.ts
var requestApi = __webpack_require__("VQ5N");

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);

// CONCATENATED MODULE: ./server/utils/keysToSnakeCase.ts

/**
 * @example
 *   import keysToSnakeCase from './keysToSnakeCase';
 *   keysToSnakeCase({bad_key: 1});   => {badKey: 1}
 *   keysToSnakeCase([{bad_key: 1}]); => [{badKey: 1}]
 */

function keysToSnakeCase(object) {
  let snakeCaseObject = external_lodash_default.a.cloneDeep(object);

  if (external_lodash_default.a.isArray(snakeCaseObject)) {
    return external_lodash_default.a.map(snakeCaseObject, keysToSnakeCase);
  }

  snakeCaseObject = external_lodash_default.a.mapKeys(snakeCaseObject, (_value, key) => {
    return external_lodash_default.a.snakeCase(key);
  }); // Recursively apply throughout object

  return external_lodash_default.a.mapValues(snakeCaseObject, value => {
    if (external_lodash_default.a.isPlainObject(value)) {
      return keysToSnakeCase(value);
    }

    if (external_lodash_default.a.isArray(value)) {
      return external_lodash_default.a.map(value, keysToSnakeCase);
    }

    return value;
  });
}

/* harmony default export */ var utils_keysToSnakeCase = (keysToSnakeCase);
// CONCATENATED MODULE: ./pages/index.tsx
var __jsx = external_react_default.a.createElement;
























const mapState = state => ({
  appConfig: state.appConfig,
  branchApp: state.branchApp,
  session: state.session,
  shareLink: state.shareLink
});

const connector = Object(external_react_redux_["connect"])(mapState);
const useStyles = Object(styles_["makeStyles"])(theme => ({
  paddingContent: {
    padding: theme.spacing(2)
  },
  filledNormalInput: {
    padding: theme.spacing(1)
  },
  filledNormalAdornedEnd: {
    paddingRight: 0
  },
  input: {
    paddingLeft: theme.spacing(2)
  },
  selectInputNative: {
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    fontSize: 16,
    transition: theme.transitions.create(['border-color', 'box-shadow'])
  }
}));
const FacebookAppCollections = [{
  id: 200368456664008,
  name: 'We Heart It'
}, {
  id: 87741124305,
  name: 'Youtube'
}, {
  id: 166222643790489,
  name: 'Metacafe'
}, {
  id: 462754987849668,
  name: 'Flickr.com'
}, {
  id: 187960271237149,
  name: 'Detik.com'
}, {
  id: 160621007401976,
  name: 'Liputan6.com'
}, {
  id: 324557847592228,
  name: 'Kompas.com'
}, {
  id: 332404380172618,
  name: 'Tempo.co'
}];

const PageIndex = ({
  appConfig,
  branchApp,
  session,
  shareLink,
  dispatch
}) => {
  const classes = useStyles();
  const [loading, setLoading] = external_react_default.a.useState(false);
  const [resultLink, setResultLink] = external_react_default.a.useState(shareLink.originalLink || '');
  const [selectedApp, setSelectedApp] = external_react_default.a.useState(0);
  const refResultLink = external_react_default.a.createRef();
  const refResultLinkPost = external_react_default.a.createRef();
  const ElementListApp = [];
  FacebookAppCollections.forEach((item, key) => {
    ElementListApp.push(__jsx("option", {
      value: key,
      key: ElementListApp.length
    }, item.name));
  });

  const handleChangeBranchApp = (key, value) => {
    dispatch(putBranchApp({
      [key]: value
    }));
  };

  external_react_default.a.useEffect(() => {
    const app = FacebookAppCollections[selectedApp];

    if (app !== undefined) {
      if (resultLink && resultLink !== '') {
        const query = new URLSearchParams(utils_keysToSnakeCase({
          appId: app.id,
          display: 'popup',
          href: resultLink
        }));
        const appLink = `https://www.facebook.com/dialog/share?${query.toString()}`;
        dispatch(putShareLink({
          app,
          appLink,
          originalLink: resultLink
        }));
      } else {
        dispatch(putShareLink({
          app,
          originalLink: resultLink
        }));
      }
    }
  }, [dispatch, selectedApp, resultLink]);

  const onChangeInput = key => event => {
    handleChangeBranchApp(key, event.currentTarget.value);
  };

  const onChangeApp = event => {
    const index = parseInt(event.currentTarget.value, 10);
    setSelectedApp(index);
  };

  const onSubmit = async event => {
    event.preventDefault();
    setLoading(true);

    try {
      const request = Object(requestApi["a" /* default */])();
      const response = await request({
        method: 'post',
        url: '/create-app',
        data: external_qs_default.a.stringify(utils_keysToSnakeCase(branchApp)),
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          authorization: `Bearer ${session}`
        }
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

  return __jsx(Box_default.a, {
    my: 8
  }, __jsx(head_default.a, null, __jsx("title", null, appConfig.title)), __jsx(Paper_default.a, {
    elevation: 3
  }, __jsx("div", {
    className: classes.paddingContent
  }, __jsx("h1", null, appConfig.name)), __jsx("form", {
    onSubmit: onSubmit
  }, __jsx("div", {
    className: classes.paddingContent
  }, __jsx(Grid_default.a, {
    container: true,
    spacing: 2
  }, __jsx(Grid_default.a, {
    item: true,
    xs: 12,
    sm: 4
  }, __jsx(FormControl_default.a, {
    variant: 'outlined',
    size: 'small',
    fullWidth: true
  }, __jsx(InputLabel_default.a, {
    htmlFor: 'input-branch-user-id'
  }, "User ID", __jsx("span", {
    style: {
      color: 'red'
    }
  }, "*")), __jsx(OutlinedInput_default.a, {
    id: 'input-branch-user-id',
    type: 'text',
    label: 'User ID',
    value: branchApp.userId,
    onChange: onChangeInput('userId'),
    required: true
  }))), __jsx(Grid_default.a, {
    item: true,
    xs: 12,
    sm: 8
  }, __jsx(FormControl_default.a, {
    variant: 'outlined',
    size: 'small',
    fullWidth: true
  }, __jsx(InputLabel_default.a, {
    htmlFor: 'input-branch-user-email'
  }, "User Email", __jsx("span", {
    style: {
      color: 'red'
    }
  }, "*")), __jsx(OutlinedInput_default.a, {
    id: 'input-branch-user-email',
    type: 'email',
    label: 'User Email',
    value: branchApp.userEmail,
    onChange: onChangeInput('userEmail'),
    required: true
  }))), __jsx(Grid_default.a, {
    item: true,
    xs: 12
  }, __jsx(FormControl_default.a, {
    variant: 'outlined',
    size: 'small',
    fullWidth: true
  }, __jsx(InputLabel_default.a, {
    htmlFor: 'input-redirect-link'
  }, "Redirect Link", __jsx("span", {
    style: {
      color: 'red'
    }
  }, "*")), __jsx(OutlinedInput_default.a, {
    id: 'input-redirect-link',
    type: 'url',
    label: 'Redirect Link',
    value: branchApp.redirectLink,
    onChange: onChangeInput('redirectLink'),
    required: true
  }))))), __jsx(Divider_default.a, null), __jsx("div", {
    className: classes.paddingContent
  }, __jsx(Grid_default.a, {
    container: true,
    spacing: 2
  }, __jsx(Grid_default.a, {
    item: true,
    xs: 12
  }, __jsx(FormControl_default.a, {
    variant: 'outlined',
    size: 'small',
    fullWidth: true
  }, __jsx(InputLabel_default.a, {
    htmlFor: 'input-branch-og-title'
  }, "og_title"), __jsx(OutlinedInput_default.a, {
    id: 'input-branch-og-title',
    type: 'text',
    label: 'og_title',
    value: branchApp.ogTitle || '',
    onChange: onChangeInput('ogTitle')
  }))), __jsx(Grid_default.a, {
    item: true,
    xs: 12
  }, __jsx(FormControl_default.a, {
    variant: 'outlined',
    size: 'small',
    fullWidth: true
  }, __jsx(InputLabel_default.a, {
    htmlFor: 'input-branch-og-image-url'
  }, "og_image_url"), __jsx(OutlinedInput_default.a, {
    id: 'input-branch-og-image-url',
    type: 'url',
    label: 'og_image_url',
    value: branchApp.ogImageUrl || '',
    onChange: onChangeInput('ogImageUrl')
  }))), __jsx(Grid_default.a, {
    item: true,
    xs: 12
  }, __jsx(FormControl_default.a, {
    variant: 'outlined',
    size: 'small',
    fullWidth: true
  }, __jsx(InputLabel_default.a, {
    htmlFor: 'input-branch-og-description'
  }, "og_description"), __jsx(OutlinedInput_default.a, {
    id: 'input-branch-og-description',
    type: 'text',
    label: 'og_description',
    value: branchApp.ogDescription || '',
    onChange: onChangeInput('ogDescription')
  }))), __jsx(Grid_default.a, {
    item: true,
    xs: 12
  }, __jsx(FormControl_default.a, {
    fullWidth: true
  }, __jsx(Button_default.a, {
    variant: 'contained',
    type: 'submit',
    color: 'secondary',
    disabled: loading
  }, loading ? 'Loading cuk' : 'Submit'))))), __jsx(Divider_default.a, null), __jsx("div", {
    className: classes.paddingContent
  }, __jsx(Grid_default.a, {
    container: true,
    spacing: 2
  }, __jsx(Grid_default.a, {
    item: true,
    xs: 12
  }, __jsx(FormControl_default.a, {
    variant: 'filled',
    size: 'small',
    fullWidth: true
  }, __jsx(FilledInput_default.a, {
    id: 'input-result-url',
    inputRef: refResultLink,
    name: 'input-result-url',
    type: 'url',
    value: shareLink.originalLink,
    margin: 'none',
    classes: {
      input: external_clsx_default()(classes.filledNormalInput, classes.input),
      adornedEnd: classes.filledNormalAdornedEnd
    },
    autoComplete: 'off',
    placeholder: 'http://...',
    inputProps: {
      'aria-label': 'Post URL',
      onClick: () => {
        if (refResultLink && refResultLink.current) {
          refResultLink.current.select();
        }

        document.execCommand('copy');
      }
    },
    endAdornment: __jsx(InputAdornment_default.a, {
      position: 'end'
    }, __jsx(IconButton_default.a, {
      "aria-label": 'Copy URL',
      onClick: () => {
        if (refResultLink && refResultLink.current) {
          refResultLink.current.select();
        }

        document.execCommand('copy');
      }
    }, __jsx(FileCopy_default.a, {
      fontSize: 'default'
    })))
  }))), __jsx(Grid_default.a, {
    item: true,
    xs: 4
  }, __jsx(FormControl_default.a, {
    variant: 'filled',
    fullWidth: true
  }, __jsx(NativeSelect_default.a, {
    value: selectedApp,
    onChange: onChangeApp,
    name: 'language',
    inputProps: {
      'aria-label': 'Language'
    },
    classes: {
      select: classes.selectInputNative
    }
  }, ElementListApp))), __jsx(Grid_default.a, {
    item: true,
    xs: 8
  }, __jsx(FormControl_default.a, {
    variant: 'filled',
    fullWidth: true
  }, __jsx(FilledInput_default.a, {
    id: 'input-result-url-post',
    inputRef: refResultLinkPost,
    name: 'input-result-url-post',
    type: 'url',
    value: shareLink.appLink,
    margin: 'none',
    classes: {
      input: external_clsx_default()(classes.filledNormalInput, classes.input),
      adornedEnd: classes.filledNormalAdornedEnd
    },
    autoComplete: 'off',
    placeholder: 'http://...',
    inputProps: {
      'aria-label': 'Post URL',
      onClick: () => {
        if (refResultLinkPost && refResultLinkPost.current) {
          refResultLinkPost.current.select();
        }

        document.execCommand('copy');
      }
    },
    endAdornment: __jsx(InputAdornment_default.a, {
      position: 'end'
    }, __jsx(IconButton_default.a, {
      "aria-label": 'Copy URL',
      onClick: () => {
        if (refResultLinkPost && refResultLinkPost.current) {
          refResultLinkPost.current.select();
        }

        document.execCommand('copy');
      }
    }, __jsx(FileCopy_default.a, {
      fontSize: 'default'
    })))
  }))))))));
};

PageIndex.pageSize = 'msd';
/* harmony default export */ var pages = __webpack_exports__["default"] = (connector(PageIndex));

/***/ }),

/***/ "4VpM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FilledInput");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

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

/***/ "EmCc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "UV9R":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FileCopy");

/***/ }),

/***/ "VQ5N":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export handleException */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Koyok.e pervuma aku ngawe negeiki barang, kampret
 */

const isServer = true;
/**
 * Error handle from rest api
 * @param {AxiosError} error
 * @return {AxiosError}
 */

const handleException = error => {
  let errorMessage = '';

  if (error.response) {
    const data = error.response.data;

    if (!data) {
      errorMessage = 'Empty response!';
    } else if (data.error.message) {
      errorMessage = data.error.message;
    } else {
      errorMessage = 'Invalid error response!';
    }
  } else if (error.request) {
    errorMessage = 'The request was made but no response, try check your connection';
  } else {
    errorMessage = error.message;
  }

  if (errorMessage) {
    error.message = errorMessage;
  }

  return error;
};
/**
 * Run fetch local api
 *
 * @returns {AxiosInstance}
 */

function requestApi() {
  const params = {
    baseURL: '/api'
  };
  const instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create(params);
  instance.interceptors.response.use(response => response, error => {
    const exceptions = handleException(error);

    if (isServer) {
      if (exceptions) {
        delete exceptions.config;
      }
    }

    return Promise.reject(exceptions);
  });
  return instance;
}

/* harmony default export */ __webpack_exports__["a"] = (requestApi);

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "ZVla":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/OutlinedInput");

/***/ }),

/***/ "ZkBw":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dYMV":
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "eW3l":
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "lWoh":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "lj8g":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputAdornment");

/***/ }),

/***/ "nybW":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "qt1I":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zOcm":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),

/***/ "zgji":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/NativeSelect");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });