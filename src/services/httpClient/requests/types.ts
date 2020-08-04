export interface GetUserResponse {
  login: string;
  name: string;
  id: number;
  avatar_url: string;
  html_url: string;
  bio: string;
}

export interface SearchUserRepositoriesResponse {
  total_count: number;
  items: {
    id: number;
    name: string;
    full_name: string;
    html_url: string;
    stargazers_count: number;
  }[];
}

export interface SearchUsersResponse {
  total_count: number;
  items: UserSearchResult[];
}

export interface UserSearchResult {
  login: string;
}
