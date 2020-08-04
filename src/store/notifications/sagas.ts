import { CREATE_NOTIFICATION } from './constants';
import { Action } from '../types';
import {
  createNotification,
  CreateNotificationPayload,
  createNotificationSuccess,
} from './actions';
import shortid from 'shortid';
import { takeEvery, put } from 'redux-saga/effects';
import { NotificationType } from './types';

export function* notificationSaga() {
  yield takeEvery(CREATE_NOTIFICATION, onCreateNotification);
}

export function* onCreateNotification(
  action: Action<CreateNotificationPayload>,
) {
  const id = shortid();

  yield put(
    createNotificationSuccess({
      ...action.payload,
      id,
    }),
  );
}

export function* createFailureNotification(message: string) {
  yield put(
    createNotification({
      notificationType: NotificationType.FAILURE,
      textContent: message,
    }),
  );
}
