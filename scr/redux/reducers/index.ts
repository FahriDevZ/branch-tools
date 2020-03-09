import { combineReducers } from 'redux';
import session from './session';
import appConfig from './appConfig';
import branchApp from './branchApp';

const rootReducer = combineReducers({
  session,
  appConfig,
  branchApp,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
