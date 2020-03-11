import { Reducer } from 'redux';
import {
  ShareLinkState,
  ShareLinkActionTypes,
  SET_SHARE_LINK,
  PUT_SHARE_LINK,
} from '../actions/types';

export const initialStateShareLink: ShareLinkState = {
  appLink: '',
  originalLink: '',
};

const reducer: Reducer<ShareLinkState, ShareLinkActionTypes> = (
  state = initialStateShareLink,
  action,
): ShareLinkState => {
  switch (action.type) {
    case SET_SHARE_LINK:
      return action.payload;
    case PUT_SHARE_LINK:
      return { ...state, ...action.meta };
    default:
      return state;
  }
};

export default reducer;
