import { GhUser, GhRepository } from './types';
import {
  SearchUserRepositoriesResponse,
  GetUserResponse,
} from '../../services/httpClient/requests/types';

export const mapGhUserToDomain = (response: GetUserResponse): GhUser => ({
  userName: response.name || response.login,
  bio: response.bio,
  url: response.html_url,
  avatarUrl: response.avatar_url,
});

export const mapGhRepositoriesToDomain = (
  response: SearchUserRepositoriesResponse,
): GhRepository[] =>
  response.items.map(repo => ({
    url: repo.html_url,
    name: repo.name,
    stars: repo.stargazers_count,
    id: repo.id,
  }));
