import {
  AppConfigState,
  AppConfigActionTypes,
  PutAppConfig,
  SET_APP_CONFIG,
  PUT_APP_CONFIG,
} from './types';

export function setAppConfig(appConfig: AppConfigState): AppConfigActionTypes {
  return {
    type: SET_APP_CONFIG,
    payload: appConfig,
  };
}

export function putAppConfig(appConfig: PutAppConfig): AppConfigActionTypes {
  return {
    type: PUT_APP_CONFIG,
    meta: appConfig,
  };
}
