export interface GhUserState {
  isLoading: boolean;
  user: GhUser;
  repositories: GhRepository[];
}

export interface GhUser {
  userName: string;
  bio: string;
  avatarUrl: string;
}

export interface GhRepository {
  id: string;
  name: string;
  stars: number;
}
