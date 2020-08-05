import { HttpClientInterface } from '../interface';
import { getUserData, searchUser, searchUserRepositories } from './index';

const clientMock: HttpClientInterface = {
  get: jest.fn(),
};
jest.spyOn(clientMock, 'get');

beforeEach(() => {
  jest.resetAllMocks();
});

describe('getUserData', () => {
  it('should call passed client and substitute address with passed userName', () => {
    getUserData(clientMock, 'testName');

    expect(clientMock.get).toHaveBeenCalledTimes(1);
    expect(clientMock.get).toHaveBeenCalledWith('/users/testName');
  });
});

describe('searchUserRepositories', () => {
  it('should call passed client and substitute address with passed userName', () => {
    searchUserRepositories(clientMock, 'testName');

    expect(clientMock.get).toHaveBeenCalledTimes(1);
    expect(clientMock.get).toHaveBeenCalledWith(
      '/search/repositories?q=user:testName&sort=stars&order=desc&per_page=3&page=1',
    );
  });
});

describe('searchUser', () => {
  it('should call passed client and substitute address with passed userName', () => {
    searchUser(clientMock, 'testName');

    expect(clientMock.get).toHaveBeenCalledTimes(1);
    expect(clientMock.get).toHaveBeenCalledWith(
      '/search/users?q=testName&per_page=1&page=1',
    );
  });
});
