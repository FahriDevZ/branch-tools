import { Reducer } from 'redux';
import {
  AppConfigState,
  AppConfigActionTypes,
  SET_APP_CONFIG,
  PUT_APP_CONFIG,
} from '../actions/types';

export const initialStateAppConfig: AppConfigState = {
  name: 'Hello World',
};

const reducer: Reducer<AppConfigState, AppConfigActionTypes> = (
  state = initialStateAppConfig,
  action,
): AppConfigState => {
  switch (action.type) {
    case SET_APP_CONFIG:
      return action.payload;
    case PUT_APP_CONFIG:
      return { ...state, [action.meta.key]: action.meta.value };
    default:
      return state;
  }
};

export default reducer;
