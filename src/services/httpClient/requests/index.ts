import { HttpClientInterface } from '../interface';
import { SearchUserResponse } from './types';

export const searchUserData = async (
  client: HttpClientInterface,
  userName: string,
): Promise<SearchUserResponse> => {
  // todo return type
  const endpoint = '/users/%s'.replace('%s', userName);
  return client.get<SearchUserResponse>(endpoint);
};

export const searchUserRepositories = async (
  client: HttpClientInterface,
  userName: string,
) => {
  const endpoint = 'repositories?q=user:%s&sort=stars&order=desc&per_page=3&page=1'.replace(
    '%s',
    userName,
  );
  return client.get<any>(endpoint);
};
