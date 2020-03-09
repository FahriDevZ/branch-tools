// eslint-disable-next-line import/prefer-default-export
export default class AppConfig {
  id: string;

  appKey: string;

  creationDate: Date;

  appName: string;

  origin: string;

  devName: string;

  devEmail: string;

  alwaysOpenApp?: boolean;

  androidApp?: string;

  androidUrl?: string;

  androidUrlScheme?: string;

  androidPackageName?: string;

  androidAppLinksEnabled: boolean;

  iosApp?: string;

  iosUrl?: string;

  iosUrlScheme?: string;

  iosStoreCountry: string;

  iosBundleId?: string;

  iosTeamId?: string;

  universalLinkingEnabled: boolean;

  fireUrl?: string;

  windowsPhoneUrl?: string;

  blackBerryUrl?: string;

  webUrl?: string;

  defaultDesktopUrl?: string;

  shortUrlDomain: string;

  defaultShortUrlDomain: string;

  alternateShortUrlDomain: string;

  textMessage?: string;

  ogAppId?: string;

  ogTitle?: string;

  ogImageUrl?: string;

  ogDescription?: string;

  branchKey: string;

  branchSecret: string;

  deepviewDesktop?: string;

  deepviewIos?: string;

  deepviewAndroid?: string;

  reservedAnalyticsToUtm: boolean;

  uriRedirectMode: boolean;

  timezone: string;
}
