import { createAction, handleRequestError } from '../utils';
import * as exceptions from '../../services/httpClient/exceptions';
import * as notificationMessages from '../../constants/notificationMessages';
import { call, put } from 'redux-saga/effects';
import { createFailureNotification } from '../notifications/sagas';

describe('createAction function', () => {
  it('should create an object with specified action type and payload', () => {
    expect(createAction('TEST', { test: 'value' })).toEqual({
      type: 'TEST',
      payload: {
        test: 'value',
      },
    });
  });
  it('should create an object with specified action without payload if none is provided', () => {
    expect(createAction('TEST')).toEqual({
      type: 'TEST',
    });
  });
});

describe('handleRequestError function', () => {
  it('should dispatch notification with appropriate message if NoApiResponseError is thrown', () => {
    const gen = handleRequestError(new exceptions.NoApiResponseError());

    expect(gen.next().value).toEqual(
      call(createFailureNotification, notificationMessages.noConnectionMsg),
    );

    expect(gen.next().done).toBeTruthy();
  });
  it('should dispatch notification with appropriate message if UnprocessableEntity error is thrown', () => {
    const gen = handleRequestError(new exceptions.UnprocessableEntity());

    expect(gen.next().value).toEqual(
      call(
        createFailureNotification,
        notificationMessages.unprocessableEntityError,
      ),
    );

    expect(gen.next().done).toBeTruthy();
  });
  it('should dispatch notification with appropriate message if ResourceNotFoundError is thrown', () => {
    const gen = handleRequestError(new exceptions.ResourceNotFoundError());

    expect(gen.next().value).toEqual(
      call(
        createFailureNotification,
        notificationMessages.resourceNotFoundError,
      ),
    );

    expect(gen.next().done).toBeTruthy();
  });
  it('should dispatch notification with appropriate message if ApiInternalError is thrown', () => {
    const gen = handleRequestError(new exceptions.ApiInternalError());

    expect(gen.next().value).toEqual(
      call(createFailureNotification, notificationMessages.internalErrorMsg),
    );

    expect(gen.next().done).toBeTruthy();
  });
  it('should dispatch notification with appropriate message otherwise', () => {
    const gen = handleRequestError(new Error());

    expect(gen.next().value).toEqual(
      call(createFailureNotification, notificationMessages.internalErrorMsg),
    );

    expect(gen.next().done).toBeTruthy();
  });
});
