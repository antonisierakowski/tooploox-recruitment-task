import { ghUserReducer } from '../reducer';
import { GhUserState } from '../types';
import {
  ghUserFixture,
  ghUserStateFixture,
  repositoriesFixture,
} from '../../../fixtures/ghUserStateFixture';
import {
  searchUserData,
  searchUserDataFailure,
  searchUserDataSuccess,
  searchUserRepositoriesSuccess,
} from '../actions';

describe('ghUserReducer', () => {
  it('should set isLoading to true and nullify other params on SEARCH_USER_DATA', () => {
    const expectedState: GhUserState = {
      user: null,
      repositories: [],
      isLoading: true,
    };

    const action = searchUserData({ userName: 'test' });

    expect(ghUserReducer(ghUserStateFixture, action)).toEqual(expectedState);
  });

  it('should set isLoading to false, set user from payload and nullify repositories on SEARCH_USER_DATA_SUCCESS', () => {
    const expectedState: GhUserState = {
      user: ghUserFixture,
      repositories: [],
      isLoading: false,
    };

    const action = searchUserDataSuccess({ user: ghUserFixture });

    expect(ghUserReducer(ghUserStateFixture, action)).toEqual(expectedState);
  });

  it('should set repositories from payload on SEARCH_USER_REPOSITORIES_SUCCESS', () => {
    const state: GhUserState = {
      user: null,
      repositories: [],
      isLoading: false,
    };
    const expectedState: GhUserState = {
      user: null,
      repositories: repositoriesFixture,
      isLoading: false,
    };

    const action = searchUserRepositoriesSuccess({
      repositories: repositoriesFixture,
    });

    expect(ghUserReducer(state, action)).toEqual(expectedState);
  });

  it('should set isLoading to false and nullify other params SEARCH_USER_DATA_FAILURE', () => {
    const expectedState: GhUserState = {
      user: null,
      repositories: [],
      isLoading: false,
    };

    const action = searchUserDataFailure();

    expect(ghUserReducer(ghUserStateFixture, action)).toEqual(expectedState);
  });

  it('should return input state otherwise', () => {
    const action = {
      type: 'TEST',
    };

    expect(ghUserReducer(ghUserStateFixture, action)).toEqual(
      ghUserStateFixture,
    );
  });
});
