import { BranchAppState, BranchAppActionTypes, SET_BRANCH_APP, PUT_BRANCH_APP } from './types';

export function setBranchApp(data: BranchAppState): BranchAppActionTypes {
  return { type: SET_BRANCH_APP, payload: data };
}

export function putBranchApp(data: Partial<BranchAppState>): BranchAppActionTypes {
  return { type: PUT_BRANCH_APP, meta: data };
}
