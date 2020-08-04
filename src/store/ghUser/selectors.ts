import { RootState } from '../types';
import { GhRepository, GhUser, GhUserState } from './types';

export const selectGhUserState = (state: RootState): GhUserState =>
  state.ghUserState;

export const selectCurrentGhUser = (state: RootState): GhUser =>
  selectGhUserState(state).user;

export const selectGhUserName = (state: RootState): string =>
  selectCurrentGhUser(state).userName;

export const selectAvatarUrl = (state: RootState): string =>
  selectCurrentGhUser(state).avatarUrl;

export const selectGhUserBio = (state: RootState): string =>
  selectCurrentGhUser(state).bio;

export const selectCurrentGhUserRepositories = (
  state: RootState,
): GhRepository[] => selectGhUserState(state).repositories;

export const selectCurrentGhUserRepository = (state: RootState, id: number) => {
  const repositories = selectCurrentGhUserRepositories(state);
  return repositories.find(repo => repo.id === id);
};
