import { HttpClientInterface } from '../interface';
import {
  SearchUserRepositoriesResponse,
  GetUserResponse,
  SearchUsersResponse,
  UserSearchResult,
} from './types';

export const getUserData = async (
  client: HttpClientInterface,
  userName: string,
): Promise<GetUserResponse> => {
  const endpoint = '/users/%s'.replace('%s', userName);
  return client.get<GetUserResponse>(endpoint);
};

export const searchUserRepositories = async (
  client: HttpClientInterface,
  userName: string,
): Promise<SearchUserRepositoriesResponse> => {
  const endpoint = '/search/repositories?q=user:%s&sort=stars&order=desc&per_page=3&page=1'.replace(
    '%s',
    userName,
  );
  return client.get<SearchUserRepositoriesResponse>(endpoint);
};

export const searchUser = async (
  client: HttpClientInterface,
  userNameQuery: string,
): Promise<UserSearchResult> => {
  const endpoint = '/search/users?q=%s&per_page=1&page=1'.replace(
    '%s',
    userNameQuery,
  );
  const response = await client.get<SearchUsersResponse>(endpoint);
  return response.items[0];
};
