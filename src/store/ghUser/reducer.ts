import { GhUserState } from './types';
import { Action } from '../types';
import { Reducer } from 'redux';
import {
  SEARCH_USER_DATA,
  SEARCH_USER_DATA_FAILURE,
  SEARCH_USER_DATA_SUCCESS,
} from './constants';
import { SearchUserDataSuccessPayload } from './actions';

const initialState: GhUserState = {
  isLoading: false,
  user: null,
  repositories: [],
};

export const ghUserReducer: Reducer<GhUserState, Action> = (
  state: GhUserState = initialState,
  action: Action,
) => {
  switch (action.type) {
    case SEARCH_USER_DATA: {
      return {
        user: null,
        repositories: [],
        isLoading: true,
      };
    }
    case SEARCH_USER_DATA_SUCCESS: {
      const {
        user,
        repositories,
      } = action.payload as SearchUserDataSuccessPayload;
      return {
        isLoading: false,
        user,
        repositories,
      };
    }
    case SEARCH_USER_DATA_FAILURE: {
      return {
        user: null,
        repositories: [],
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};
