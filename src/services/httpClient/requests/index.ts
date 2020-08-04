import { HttpClientInterface } from '../interface';
import { SearchUserRepositoriesResponse, SearchUserResponse } from './types';

export const searchUserData = async (
  client: HttpClientInterface,
  userName: string,
): Promise<SearchUserResponse> => {
  const endpoint = '/users/%s'.replace('%s', userName);
  return client.get<SearchUserResponse>(endpoint);
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
