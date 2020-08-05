import { __axiosInstance, HttpClient } from './index';
import * as exceptions from './exceptions';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(__axiosInstance);

describe('HttpClient instance', () => {
  describe('getInstance method', () => {
    it('should return the same instance', () => {
      const firstCallInstance = HttpClient.getInstance();
      const secondCallInstance = HttpClient.getInstance();
      expect(firstCallInstance).toBe(secondCallInstance);
    });
  });

  describe("instance's get method", () => {
    let instance: HttpClient;

    beforeEach(() => {
      instance = HttpClient.getInstance();
    });

    it('should call client get method', async () => {
      mock.onGet('/').reply(200, { message: 'ok' });
      expect(await instance.get('/')).toEqual({ message: 'ok' });
    });

    it("should throw NoApiResponseError if there's an error, but there's no response", async () => {
      mock.onGet('/').networkError();
      await expect(instance.get('/')).rejects.toThrow(
        new exceptions.NoApiResponseError(),
      );
    });

    it('should throw UnprocessableEntity error if response status code is 422', async () => {
      mock.onGet('/').reply(422);
      await expect(instance.get('/')).rejects.toThrow(
        new exceptions.UnprocessableEntity(),
      );
    });

    it('should throw ResourceNotFoundError error if response status code is 404', async () => {
      mock.onGet('/').reply(404);
      await expect(instance.get('/')).rejects.toThrow(
        new exceptions.ResourceNotFoundError(),
      );
    });

    it('should throw ApiInternalError if response status code is 500', async () => {
      mock.onGet('/').reply(500);
      await expect(instance.get('/')).rejects.toThrow(
        new exceptions.ApiInternalError(),
      );
    });

    it('should throw ApiInternalError if response status code is other than above but not 200', async () => {
      mock.onGet('/').reply(404);
      await expect(instance.get('/')).rejects.toThrow(
        new exceptions.ApiInternalError(),
      );
    });
  });
});
