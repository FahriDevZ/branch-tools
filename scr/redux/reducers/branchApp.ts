import { Reducer } from 'redux';
import {
  BranchAppState,
  BranchAppActionTypes,
  SET_BRANCH_APP,
  PUT_BRANCH_APP,
} from '../actions/types';

export const initialStateBranchApp: BranchAppState = {
  userId: '',
  userEmail: '',
  redirectLink: '',
};

const reducer: Reducer<BranchAppState, BranchAppActionTypes> = (
  state = initialStateBranchApp,
  action,
): BranchAppState => {
  switch (action.type) {
    case SET_BRANCH_APP:
      return action.payload;
    case PUT_BRANCH_APP:
      return { ...state, ...action.meta };
    default:
      return state;
  }
};

export default reducer;
