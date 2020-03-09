import { SessionState, SessionActionTypes, SET_SESSION } from './types';

// eslint-disable-next-line import/prefer-default-export
export function setSession(session: SessionState): SessionActionTypes {
  return {
    type: SET_SESSION,
    payload: session,
  };
}
