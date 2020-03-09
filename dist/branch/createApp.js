"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keysToSnakeCase_1 = __importDefault(require("../utils/keysToSnakeCase"));
const keysToCamelCase_1 = __importDefault(require("../utils/keysToCamelCase"));
const AppConfig_1 = __importDefault(require("./schemes/AppConfig"));
// import { ErrorScheme, ErrorBody } from './schemes/Error';
const request_1 = __importDefault(require("./request"));
async function createApp(parameters) {
    const requestData = keysToSnakeCase_1.default(parameters);
    const response = await request_1.default()({
        method: 'POST',
        url: '/app',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        data: requestData,
    });
    const data = keysToCamelCase_1.default(response.data);
    // if (data.error) {
    //   const errorScheme = new ErrorScheme();
    //   errorScheme.error = new ErrorBody();
    //   errorScheme.error.code = data.error.code;
    //   errorScheme.error.message = data.error.message;
    //   return errorScheme;
    // }
    const appConfig = new AppConfig_1.default();
    appConfig.id = data.id;
    appConfig.appKey = data.appKey;
    if (data.hasOwnProperty('creationDate')) {
        appConfig.creationDate = new Date(data.creationDate);
    }
    appConfig.appName = data.appName;
    appConfig.origin = data.origin;
    appConfig.devName = data.devName;
    appConfig.devEmail = data.devEmail;
    if (data.hasOwnProperty('alwaysOpenApp')) {
        appConfig.alwaysOpenApp = !!data.alwaysOpenApp;
    }
    appConfig.androidApp = data.androidApp;
    appConfig.androidUrl = data.androidUrl;
    appConfig.androidUrlScheme = data.androidUrlScheme;
    appConfig.androidPackageName = data.androidPackageName;
    if (data.hasOwnProperty('androidAppLinksEnabled')) {
        appConfig.androidAppLinksEnabled = !!data.androidAppLinksEnabled;
    }
    appConfig.iosApp = data.iosApp;
    appConfig.iosUrl = data.isoUrl;
    appConfig.iosUrlScheme = data.iosUrlScheme;
    appConfig.iosStoreCountry = data.iosStoreCountry;
    appConfig.iosBundleId = data.iosBundleId;
    appConfig.iosTeamId = data.iosTeamId;
    if (data.hasOwnProperty('universalLinkingEnabled')) {
        appConfig.universalLinkingEnabled = !!data.universalLinkingEnabled;
    }
    appConfig.fireUrl = data.fireUrl;
    appConfig.windowsPhoneUrl = data.windowsPhoneUrl;
    appConfig.blackBerryUrl = data.blackBerryUrl;
    appConfig.webUrl = data.webUrl;
    appConfig.defaultDesktopUrl = data.defaultDesktopUrl;
    appConfig.shortUrlDomain = data.shortUrlDomain;
    appConfig.defaultShortUrlDomain = data.defaultShortUrlDomain;
    appConfig.alternateShortUrlDomain = data.alternateShortUrlDomain;
    appConfig.textMessage = data.textMessage;
    appConfig.ogAppId = data.ogAppId;
    appConfig.ogTitle = data.ogTitle;
    appConfig.ogImageUrl = data.ogImageUrl;
    appConfig.ogDescription = data.ogDescription;
    appConfig.branchKey = data.branchKey;
    appConfig.branchSecret = data.branchSecret;
    appConfig.deepviewDesktop = data.deepviewDesktop;
    appConfig.deepviewIos = data.deepviewIos;
    appConfig.deepviewAndroid = data.deepviewAndroid;
    if (data.hasOwnProperty('uriRedirectMode')) {
        appConfig.uriRedirectMode = !!data.uriRedirectMode;
    }
    if (data.hasOwnProperty('reservedAnalyticsToUtm')) {
        appConfig.reservedAnalyticsToUtm = !!data.reservedAnalyticsToUtm;
    }
    appConfig.timezone = data.timezone;
    return appConfig;
}
exports.default = createApp;
//# sourceMappingURL=createApp.js.map