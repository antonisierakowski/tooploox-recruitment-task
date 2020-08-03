import { combineReducers } from 'redux';
import { notificationsReducer } from './notifications/reducer';
import { ghUserReducer } from './ghUser/reducer';

export const rootReducer = combineReducers({
  ghUserState: ghUserReducer,
  notificationsState: notificationsReducer,
});
