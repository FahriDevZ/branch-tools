import { ShareLinkState, ShareLinkActionTypes, SET_SHARE_LINK, PUT_SHARE_LINK } from './types';

export function setShareLink(session: ShareLinkState): ShareLinkActionTypes {
  return {
    type: SET_SHARE_LINK,
    payload: session,
  };
}

export function putShareLink(data: Partial<ShareLinkState>): ShareLinkActionTypes {
  return { type: PUT_SHARE_LINK, meta: data };
}
