import {
  selectAvatarUrl,
  selectCurrentGhUser,
  selectCurrentGhUserRepositories,
  selectCurrentGhUserRepository,
  selectGhUserBio,
  selectGhUserName,
  selectGhUserState,
  selectIsLoading,
  selectShouldRenderUserRepositoriesResults,
  selectShouldRenderUserResults,
} from '../selectors';
import {
  ghUserFixture,
  ghUserStateFixture,
  ghUserStateLoadingFixture,
  ghUserStateNotLoadingFixture,
  ghUserStateWithNoUserFixture,
  repositoriesFixture,
} from '../../../fixtures/ghUserStateFixture';
import { rootStateFixture } from '../../../fixtures/rootStateFixture';
import { RootState } from '../../types';

describe('selectGhUserState', () => {
  it('should return ghUserState ', () => {
    expect(selectGhUserState(rootStateFixture)).toEqual(ghUserStateFixture);
  });
});

describe('selectCurrentGhUser', () => {
  it('should return user property under ghUserState', () => {
    expect(selectCurrentGhUser(rootStateFixture)).toEqual(ghUserFixture);
  });
});

describe('selectGhUserName', () => {
  it('should return username', () => {
    expect(selectGhUserName(rootStateFixture)).toEqual(ghUserFixture.userName);
  });

  it("should return undefined if there's no user", () => {
    const state: RootState = {
      ...rootStateFixture,
      ghUserState: ghUserStateWithNoUserFixture,
    };
    expect(selectGhUserName(state)).toEqual(undefined);
  });
});

describe('selectAvatarUrl', () => {
  it('should return avatar url', () => {
    expect(selectAvatarUrl(rootStateFixture)).toEqual(ghUserFixture.avatarUrl);
  });

  it("should return undefined if there's no user", () => {
    const state: RootState = {
      ...rootStateFixture,
      ghUserState: ghUserStateWithNoUserFixture,
    };
    expect(selectAvatarUrl(state)).toEqual(undefined);
  });
});

describe('selectGhUserBio', () => {
  it('should return user bio', () => {
    expect(selectGhUserBio(rootStateFixture)).toEqual(ghUserFixture.bio);
  });

  it("should return undefined if there's no user", () => {
    const state: RootState = {
      ...rootStateFixture,
      ghUserState: ghUserStateWithNoUserFixture,
    };
    expect(selectGhUserBio(state)).toEqual(undefined);
  });
});

describe('selectCurrentGhUserRepositories', () => {
  it('should return repositories property under ghUserState', () => {
    expect(selectCurrentGhUserRepositories(rootStateFixture)).toEqual(
      repositoriesFixture,
    );
  });
});

describe('selectCurrentGhUserRepository', () => {
  it('should return existing repository based on passed id', () => {
    expect(selectCurrentGhUserRepository(rootStateFixture, 1)).toEqual(
      repositoriesFixture[0],
    );
  });

  it('should return undefined if no repository matches passed id', () => {
    expect(selectCurrentGhUserRepository(rootStateFixture, 5)).toEqual(
      undefined,
    );
  });
});

describe('selectShouldRenderUserResults', () => {
  it('should return true if currentGhUser is non-empty', () => {
    expect(selectShouldRenderUserResults(rootStateFixture)).toEqual(true);
  });

  it('should return false if currentGhUser is empty', () => {
    const state: RootState = {
      ...rootStateFixture,
      ghUserState: {
        user: null,
        repositories: [],
        isLoading: false,
      },
    };
    expect(selectShouldRenderUserResults(state)).toEqual(false);
  });
});

describe('selectShouldRenderUserRepositoriesResults', () => {
  it('should return true if repositories are non-empty', () => {
    expect(selectShouldRenderUserRepositoriesResults(rootStateFixture)).toEqual(
      true,
    );
  });

  it('should return false if repositories are empty', () => {
    const state: RootState = {
      ...rootStateFixture,
      ghUserState: {
        user: null,
        repositories: [],
        isLoading: false,
      },
    };
    expect(selectShouldRenderUserRepositoriesResults(state)).toEqual(false);
  });
});

describe('selectIsLoading', () => {
  it('should return the value of isLoading property', () => {
    const stateNotLoading: RootState = {
      ...rootStateFixture,
      ghUserState: ghUserStateNotLoadingFixture,
    };
    const stateLoading: RootState = {
      ...rootStateFixture,
      ghUserState: ghUserStateLoadingFixture,
    };

    expect(selectIsLoading(stateNotLoading)).toEqual(false);

    expect(selectIsLoading(stateLoading)).toEqual(true);
  });
});
