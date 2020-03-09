import { Reducer } from 'redux';
import { SessionState, SessionActionTypes, SET_SESSION } from '../actions/types';

export const initialStateSession: SessionState = null;

const reducer: Reducer<SessionState, SessionActionTypes> = (
  state = initialStateSession,
  action,
): SessionState => {
  // using else-if condition because we only have one action type.
  if (action.type === SET_SESSION) {
    return action.payload;
  }
  return state;
};

export default reducer;
