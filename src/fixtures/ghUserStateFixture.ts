import { GhUserState, GhRepository } from '../store/ghUser/types';

export const repositoriesFixture: GhRepository[] = [
  {
    id: 1,
    name: 'test1',
    url: 'test',
    stars: 1,
  },
  {
    id: 2,
    name: 'test2',
    url: 'test',
    stars: 3,
  },
  {
    id: 3,
    name: 'test3',
    url: 'test',
    stars: 5,
  },
];

export const ghUserFixture = {
  userName: 'testName',
  avatarUrl: 'testAvtrUrl',
  bio: 'testBio',
  url: 'testUrl',
};

export const ghUserStateFixture: GhUserState = {
  user: ghUserFixture,
  repositories: repositoriesFixture,
  isLoading: false,
};

export const ghUserStateWithNoUserFixture: GhUserState = {
  user: null,
  repositories: repositoriesFixture,
  isLoading: false,
};

export const ghUserStateLoadingFixture: GhUserState = {
  user: null,
  repositories: repositoriesFixture,
  isLoading: true,
};

export const ghUserStateNotLoadingFixture: GhUserState = {
  user: null,
  repositories: repositoriesFixture,
  isLoading: false,
};
