import { takeEvery, put } from 'redux-saga/effects';
import { SEARCH_USER_DATA } from './constants';
import { Action } from '../types';
import { searchUserDataFailure, SearchUserDataPayload } from './actions';

export function* ghUserSaga() {
  yield takeEvery(SEARCH_USER_DATA, onSearchUserData);
}

export function* onSearchUserData({
  payload: { userName },
}: Action<SearchUserDataPayload>) {
  try {
    // todo make requests
  } catch (error) {
    yield put(searchUserDataFailure());
    // todo error handling
  }
}
