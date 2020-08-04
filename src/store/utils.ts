import { Action } from './types';
import { createFailureNotification } from './notifications/sagas';
import * as notificationMessages from '../constants/notificationMessages';
import * as exceptions from '../services/httpClient/exceptions';
import { call } from 'redux-saga/effects';

export function createAction<TPayload>(
  actionType: string,
  payload?: TPayload,
): Action<TPayload> {
  return {
    type: actionType,
    payload,
  };
}

export function* handleRequestError(error: Error) {
  switch (error.constructor) {
    case exceptions.NoApiResponseError: {
      yield call(
        createFailureNotification,
        notificationMessages.noConnectionMsg,
      );
      break;
    }
    case exceptions.ResourceNotFoundError: {
      yield call(
        createFailureNotification,
        notificationMessages.resourceNotFoundError,
      );
      break;
    }
    case exceptions.UnprocessableEntity: {
      yield call(
        createFailureNotification,
        notificationMessages.unprocessableEntityError,
      );
      break;
    }
    case exceptions.ApiInternalError:
    default: {
      yield call(
        createFailureNotification,
        notificationMessages.internalErrorMsg,
      );
    }
  }
}
