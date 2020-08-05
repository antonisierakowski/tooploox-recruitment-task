import { SEARCH_USER_DATA } from '../constants';
import { Action } from '../../types';
import {
  searchUserDataFailure,
  SearchUserDataPayload,
  searchUserDataSuccess,
  searchUserRepositoriesSuccess,
} from '../actions';
import { onSearchUserData } from '../sagas';
import { put, call } from 'redux-saga/effects';
import * as requests from '../../../services/httpClient/requests';
import httpClient from '../../../services/httpClient';
import {
  GetUserResponse,
  SearchUserRepositoriesResponse,
} from '../../../services/httpClient/requests/types';
import { mapGhRepositoriesToDomain, mapGhUserToDomain } from '../mapper';
import { handleRequestError } from '../../utils';

const responseUserName = 'testNameResult';
const userResponse: GetUserResponse = {
  id: 12,
  name: 'test',
  login: 'test',
  bio: 'test',
  html_url: 'test',
  avatar_url: 'test',
};
const userMapped = mapGhUserToDomain(userResponse);
const repositoriesResponse: SearchUserRepositoriesResponse = {
  total_count: 123,
  items: [
    {
      id: 123,
      name: 'test',
      full_name: 'test',
      html_url: 'test',
      stargazers_count: 123,
    },
  ],
};
const repositoriesMapped = mapGhRepositoriesToDomain(repositoriesResponse);

describe('onSearchUserData', () => {
  const action: Action<SearchUserDataPayload> = {
    type: SEARCH_USER_DATA,
    payload: {
      userName: 'testName',
    },
  };

  const gen = onSearchUserData(action);

  it('should make searchUser request', () => {
    expect(gen.next().value).toEqual(
      call(requests.searchUser, httpClient, action.payload.userName),
    );
  });

  it('should make getUserData request', () => {
    const response = { login: responseUserName };

    expect(gen.next(response).value).toEqual(
      call(requests.getUserData, httpClient, responseUserName),
    );
  });

  it('should should dispatch searchUserDataSuccess action', () => {
    expect(gen.next(userResponse).value).toEqual(
      put(
        searchUserDataSuccess({
          user: userMapped,
        }),
      ),
    );
  });

  it('should make searchUserRepositories request', () => {
    expect(gen.next().value).toEqual(
      call(requests.searchUserRepositories, httpClient, responseUserName),
    );
  });

  it('should dispatch searchUserRepositoriesSuccess action', () => {
    expect(gen.next(repositoriesResponse).value).toEqual(
      put(
        searchUserRepositoriesSuccess({
          repositories: repositoriesMapped,
        }),
      ),
    );
    expect(gen.next().done).toBeTruthy();
  });

  describe('error handling', () => {
    it('should dispatch searchUserDataFailure and call handleRequestError on error', () => {
      const gen = onSearchUserData(action);
      const error = new Error();
      gen.next();

      expect(gen.throw(error).value).toEqual(put(searchUserDataFailure()));
      expect(gen.next().value).toEqual(handleRequestError(error));
      expect(gen.next().done).toBeTruthy();
    });

    it('should NOT call or dispatch anything if the error happens while making searchUserRepositories request', () => {
      const gen = onSearchUserData(action);
      gen.next();
      gen.next({ login: responseUserName });
      gen.next(userResponse);
      gen.next();
      gen.throw(new Error());

      expect(gen.next().done).toBeTruthy();
    });
  });
});
