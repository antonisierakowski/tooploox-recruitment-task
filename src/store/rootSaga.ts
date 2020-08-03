import { all } from 'redux-saga/effects';
import { notificationSaga } from './notifications/sagas';

export function* rootSaga() {
  yield all([notificationSaga()]);
}
