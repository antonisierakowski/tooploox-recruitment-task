import { all } from 'redux-saga/effects';
import { notificationSaga } from './notifications/sagas';
import { ghUserSaga } from './ghUser/sagas';

export function* rootSaga() {
  yield all([ghUserSaga(), notificationSaga()]);
}
