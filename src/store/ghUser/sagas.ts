import { put, call, takeLatest } from 'redux-saga/effects';
import { SEARCH_USER_DATA } from './constants';
import { Action } from '../types';
import {
  searchUserDataFailure,
  SearchUserDataPayload,
  searchUserDataSuccess,
  searchUserRepositoriesSuccess,
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
    const { login: userNameResult } = yield call(
      requests.searchUser,
      httpClient,
      userName,
    );
    const userResponse = yield call(
      requests.getUserData,
      httpClient,
      userNameResult,
    );
    const userMapped = mapGhUserToDomain(userResponse);
    yield put(
      searchUserDataSuccess({
        user: userMapped,
      }),
    );

    try {
      const reposResponse = yield call(
        requests.searchUserRepositories,
        httpClient,
        userNameResult,
      );
      const reposMapped = mapGhRepositoriesToDomain(reposResponse);
      yield put(
        searchUserRepositoriesSuccess({
          repositories: reposMapped,
        }),
      );
    } catch (error) {
      // api returns 422 if user has no public repositories and we don't want to handle that
    }
  } catch (error) {
    yield put(searchUserDataFailure());
    yield handleRequestError(error);
  }
}
