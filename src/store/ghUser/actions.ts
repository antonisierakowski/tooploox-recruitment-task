import { Action } from '../types';
import { createAction } from '../utils';
import {
  SEARCH_USER_DATA,
  SEARCH_USER_DATA_FAILURE,
  SEARCH_USER_DATA_SUCCESS,
} from './constants';
import { GhRepository, GhUser } from './types';

export interface SearchUserDataPayload {
  userName: string;
}

export const searchUserData = (
  payload: SearchUserDataPayload,
): Action<SearchUserDataPayload> =>
  createAction<SearchUserDataPayload>(SEARCH_USER_DATA, payload);

export interface SearchUserDataSuccessPayload {
  user: GhUser;
  repositories: GhRepository[];
}

export const searchUserDataSuccess = (payload: SearchUserDataSuccessPayload) =>
  createAction<SearchUserDataSuccessPayload>(SEARCH_USER_DATA_SUCCESS, payload);

export const searchUserDataFailure = () =>
  createAction(SEARCH_USER_DATA_FAILURE);
