import { combineReducers } from 'redux';
import session from './session';
import appConfig from './appConfig';
import branchApp from './branchApp';
import shareLink from './shareLink';

const rootReducer = combineReducers({
  session,
  appConfig,
  branchApp,
  shareLink,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
