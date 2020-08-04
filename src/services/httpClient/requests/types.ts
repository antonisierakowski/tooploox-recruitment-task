export interface SearchUserResponse {
  login: string;
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
