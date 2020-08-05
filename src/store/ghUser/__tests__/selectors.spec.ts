describe('selectGhUserState', () => {
  it('should return ghUserState ', () => {});
});

describe('selectCurrentGhUser', () => {
  it('should return user property under ghUserState', () => {});
});

describe('selectGhUserName', () => {
  it('should return username', () => {});

  it("should return undefined if there's no user", () => {});
});

describe('selectAvatarUrl', () => {
  it('should return avatar url', () => {});

  it("should return undefined if there's no user", () => {});
});

describe('selectGhUserBio', () => {
  it('should return user bio', () => {});

  it("should return undefined if there's no user", () => {});
});

describe('selectCurrentGhUserRepositories', () => {
  it('should return repositoies key under ghUserState', () => {});
});

describe('selectCurrentGhUserRepository', () => {
  it('should return existing repository based on passed id', () => {});

  it('should return undefined if no repository matched passed id', () => {});
});

describe('selectShouldRenderUserResults', () => {
  it('should return true if currentGhUser is non-empty', () => {});

  it('should return false if currentGhUser is empty', () => {});
});

describe('selectShouldRenderUserRepositoriesResults', () => {
  it('should return true if repositories are non-empty', () => {});

  it('should return false if repositories are empty', () => {});
});

describe('selectIsLoading', () => {
  it('should return the value of isLoading property', () => {});
});
