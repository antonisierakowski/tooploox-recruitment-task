import {
  GetUserResponse,
  SearchUserRepositoriesResponse,
} from '../../../services/httpClient/requests/types';
import { GhRepository, GhUser } from '../types';
import { mapGhRepositoriesToDomain, mapGhUserToDomain } from '../mapper';

describe('mapGhUserToDomain function', () => {
  it('should map response object to domain object', () => {
    const response: GetUserResponse = {
      avatar_url: 'test avatar url',
      name: 'Tester Tester',
      login: 'test123',
      html_url: 'test url',
      id: 1,
      bio: null,
    };
    const expectedOutput: GhUser = {
      userName: 'Tester Tester',
      bio: null,
      url: 'test url',
      avatarUrl: 'test avatar url',
    };

    expect(mapGhUserToDomain(response)).toEqual(expectedOutput);
  });

  it("should use login key from response if there's no full user name", () => {
    const response: GetUserResponse = {
      avatar_url: 'test avatar url',
      name: null,
      login: 'test123',
      html_url: 'test url',
      id: 1,
      bio: null,
    };
    const expectedOutput: GhUser = {
      userName: 'test123',
      bio: null,
      url: 'test url',
      avatarUrl: 'test avatar url',
    };

    expect(mapGhUserToDomain(response)).toEqual(expectedOutput);
  });
});

describe('mapGhRepositoriesToDomain function', () => {
  it('should map response object to domain object', () => {
    const response: SearchUserRepositoriesResponse = {
      total_count: 123,
      items: [
        {
          id: 1,
          name: 'test1',
          full_name: 'test1',
          html_url: 'test1',
          stargazers_count: 200,
        },
        {
          id: 2,
          name: 'test2',
          full_name: 'test2',
          html_url: 'test2',
          stargazers_count: 100,
        },
      ],
    };
    const expectedOutput: GhRepository[] = [
      {
        id: 1,
        name: 'test1',
        stars: 200,
        url: 'test1',
      },
      {
        id: 2,
        name: 'test2',
        stars: 100,
        url: 'test2',
      },
    ];

    expect(mapGhRepositoriesToDomain(response)).toEqual(expectedOutput);
  });
});
