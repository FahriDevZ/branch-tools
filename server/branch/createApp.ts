import keysToSnakeCase from '../utils/keysToSnakeCase';
import keysToCamelCase from '../utils/keysToCamelCase';
import AppConfigScheme from './schemes/AppConfig';
// import { ErrorScheme, ErrorBody } from './schemes/Error';
import request from './request';

/**
 * Creating a New Branch App Config Parameters
 *
 * @see https://help.branch.io/developers-hub/docs/deep-linking-api#section-creating-a-new-branch-app-config
 */
export interface AppConfigParameters {
  /**
   * The dashboard user id. Can be found on your Branch Dashboard
   */
  userId: string;
  /**
   * The name of the app (max 255 characters).
   */
  appName: string;
  /**
   * The main contact developer name (max 255 characters).
   */
  devName: string;
  /**
   * The main contact developer email (max 255 characters).
   * Note: we'll send an invite message to this email upon account creation.
   */
  devEmail: string;
  /**
   * Whether an Android app is enabled, (0 or 1 indicating present)
   */
  androidApp?: boolean;
  /**
   * The url of the Android store, or package name (com.android.myapp). androidApp must be set to 2.
   */
  androidUrl?: string;
  /**
   * The Android URI scheme.
   */
  androidUriScheme?: string;
  /**
   * The Android package name (com.android.myapp)
   */
  androidPackageName?: string;
  /**
   * The SHA256 fingerprints for App Links, in array form.
   */
  sha256CertFingerprints?: string;
  /**
   * Whether App Links are enabled, (0 or 1 indicating true).
   */
  androidAppLinksEnabled?: string;
  /**
   * Whether an iOS app is enabled, (0 or 1 indicating present).
   */
  iosApp?: boolean;
  /**
   * The url of iOS store, or app id (id512451233), or a fallback URL for iOS if present. iosApp must be set to 2.
   */
  iosUrl?: string;
  /**
   * The iOS URI scheme.
   */
  iosUriScheme?: string;
  /**
   * The country code of the app, default to 'US' (max 255 characters).
   */
  iosStoreCountry?: string;
  /**
   * The iOS bundle ID.
   */
  iosBundleId?: string;
  /**
   * The iOS Team ID.
   */
  iosTeamId?: string;
  /**
   * Whether Universal Links should be enabled, (0 or 1 indicating true).
   */
  universalLinkingEnabled?: boolean;
  /**
   * The redirect on Fire phones.
   */
  fireUrl?: string;
  /**
   * The redirect on Windows phones.
   */
  windowsPhoneUrl?: string;
  /**
   * The redirect on Blackberry phones.
   */
  blackBerryUrl?: string;
  /**
   * Backup website if URLs are null.
   */
  webUrl?: string;
  /**
   * The default desktop redirect, or null if set to hosted SMS.
   */
  defaultDesktopUrl?: string;
  /**
   * Text message to use for text-me feature, {{ link }} will be replaced with short link (max 255 characters).
   */
  textMessage?: string;
  /**
   * Default Open Graph (OG) app id (max 255 characters).
   */
  ogAppId?: string;
  /**
   * Default OG title to be used with links (max 255 characters).
   */
  ogTitle?: string;
  /**
   * Default OG description to be used with links (max 255 characters).
   */
  ogDescription?: string;
  /**
   * Default OG image URL to be used with links (max 255 characters).
   */
  ogImageUrl?: string;
  /**
   * The current deepview selected for the desktop platform, (eg "default", "my_template")
   */
  deepviewDesktop?: string;
  /**
   * The current deepview selected for the iOS platform, (eg "default", "my_template")
   */
  deepviewIos?: string;
  /**
   * The current deepview selected for the Android platform, (eg "default", "my_template")
   */
  deepviewAndroid?: string;
}

async function createApp(parameters: AppConfigParameters): Promise<AppConfigScheme> {
  const requestData = keysToSnakeCase(parameters);
  const response = await request()({
    method: 'POST',
    url: '/app',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    data: requestData,
  });
  const data = keysToCamelCase(response.data);

  // if (data.error) {
  //   const errorScheme = new ErrorScheme();
  //   errorScheme.error = new ErrorBody();
  //   errorScheme.error.code = data.error.code;
  //   errorScheme.error.message = data.error.message;

  //   return errorScheme;
  // }

  const appConfig = new AppConfigScheme();
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

export default createApp;
