export const SET_APP_CONFIG = '@AppConfig/SET';

export const PUT_APP_CONFIG = '@AppCongig/PUT';

export interface AppConfigState {
  name: string;
  title?: string;
  description?: string;
}

interface SetAppConfigAction {
  type: typeof SET_APP_CONFIG;
  payload: AppConfigState;
}

export interface PutAppConfig {
  key: Partial<keyof AppConfigState>;
  value: any;
}

interface PutAppConfigAction {
  type: typeof PUT_APP_CONFIG;
  meta: PutAppConfig;
}

export type AppConfigActionTypes = SetAppConfigAction | PutAppConfigAction;

export const SET_SESSION = '@Session/SET';

export type SessionState = null | {
  signature: string;
};

export interface SetSession {
  type: typeof SET_SESSION;
  payload: SessionState;
}

export type SessionActionTypes = SetSession;

export const SET_BRANCH_APP = '@BranchApp/SET';

export const PUT_BRANCH_APP = '@BranchApp/PUT';

export interface BranchAppState {
  userId: string;
  userEmail: string;
  redirectLink: string;
  ogTitle?: string;
  ogImageUrl?: string;
  ogDescription?: string;
}

export interface SetBranchApp {
  type: typeof SET_BRANCH_APP;
  payload: BranchAppState;
}

export interface PutBranchApp {
  type: typeof PUT_BRANCH_APP;
  meta: Partial<BranchAppState>;
}

export type BranchAppActionTypes = SetBranchApp | PutBranchApp;

export const SET_SHARE_LINK = '@ShareLink/SET';

export const PUT_SHARE_LINK = '@ShareLink/PUT';

export interface ShareLinkApp {
  id: number;
  name: string;
}

export interface ShareLinkState {
  app?: ShareLinkApp;
  appLink: string;
  originalLink: string;
}

export interface SetShareLink {
  type: typeof SET_SHARE_LINK;
  payload: ShareLinkState;
}

export interface PutShareLink {
  type: typeof PUT_SHARE_LINK;
  meta: Partial<ShareLinkState>;
}

export type ShareLinkActionTypes = SetShareLink | PutShareLink;
