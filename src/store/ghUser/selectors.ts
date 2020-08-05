import { RootState } from '../types';
import { GhRepository, GhUser, GhUserState } from './types';
import { isEmpty } from 'lodash';

export const selectGhUserState = (state: RootState): GhUserState =>
  state.ghUserState;

export const selectCurrentGhUser = (state: RootState): GhUser =>
  selectGhUserState(state).user;

export const selectGhUserName = (state: RootState): string =>
  selectCurrentGhUser(state)?.userName;

export const selectAvatarUrl = (state: RootState): string =>
  selectCurrentGhUser(state)?.avatarUrl;

export const selectGhUserBio = (state: RootState): string =>
  selectCurrentGhUser(state)?.bio;

export const selectCurrentGhUserRepositories = (
  state: RootState,
): GhRepository[] => selectGhUserState(state).repositories;

export const selectCurrentGhUserRepository = (state: RootState, id: number) => {
  const repositories = selectCurrentGhUserRepositories(state);
  return repositories.find(repo => repo.id === id);
};

export const selectShouldRenderUserResults = (state: RootState): boolean => {
  const currentGhUser = selectCurrentGhUser(state);
  return !isEmpty(currentGhUser);
};

export const selectShouldRenderUserRepositoriesResults = (
  state: RootState,
): boolean => {
  const currentGhUserRepositories = selectCurrentGhUserRepositories(state);
  return !isEmpty(currentGhUserRepositories);
};

export const selectIsLoading = (state: RootState): boolean =>
  selectGhUserState(state).isLoading;
