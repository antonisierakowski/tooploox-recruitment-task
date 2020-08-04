import { put, call, takeLatest } from 'redux-saga/effects';
import { SEARCH_USER_DATA } from './constants';
import { Action } from '../types';
import {
  searchUserDataFailure,
  SearchUserDataPayload,
  searchUserDataSuccess,
} from './actions';
import { handleRequestError } from '../utils';
import httpClient from '../../services/httpClient';
import * as requests from '../../services/httpClient/requests';
import { mapGhRepositoriesToDomain, mapGhUserToDomain } from './mapper';

export function* ghUserSaga() {
  yield takeLatest(SEARCH_USER_DATA, onSearchUserData);
}

export function* onSearchUserData({
  payload: { userName },
}: Action<SearchUserDataPayload>) {
  try {
    const userResponse = yield call(
      requests.searchUserData,
      httpClient,
      userName,
    );
    const reposResponse = yield call(
      requests.searchUserRepositories,
      httpClient,
      userName,
    );
    console.log(userResponse);
    console.log(reposResponse);
    const userMapped = mapGhUserToDomain(userResponse);
    const reposMapped = mapGhRepositoriesToDomain(reposResponse);
    yield put(
      searchUserDataSuccess({
        user: userMapped,
        repositories: reposMapped,
      }),
    );
  } catch (error) {
    console.log(error);
    yield put(searchUserDataFailure());
    handleRequestError(error);
  }
}
