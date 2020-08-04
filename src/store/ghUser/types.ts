export interface GhUserState {
  isLoading: boolean;
  user: GhUser;
  repositories: GhRepository[];
}

export interface GhUser {
  userName: string;
  bio: string;
  avatarUrl: string;
  url: string;
}

export interface GhRepository {
  id: number;
  name: string;
  stars: number;
  url: string;
}
