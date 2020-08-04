import * as Axios from 'axios';
import * as exceptions from './exceptions';
import { StatusCode } from './types';
import { HttpClientInterface } from './interface';

export const __axiosInstance = Axios.default.create({
  baseURL: GITHUB_BASE_DOMAIN,
});

export class HttpClient implements HttpClientInterface {
  private static instance: HttpClient;
  private axiosInstance: Axios.AxiosInstance;

  private constructor() {
    this.axiosInstance = __axiosInstance;
  }

  static getInstance(): HttpClient {
    if (!HttpClient.instance) {
      HttpClient.instance = new HttpClient();
    }

    return HttpClient.instance;
  }

  private throwBasedOnStatusCode(response: Axios.AxiosResponse) {
    switch (response.status) {
      case StatusCode.OK: {
        return response;
      }
      case StatusCode.UNPROCESSABLE_ENTITY: {
        throw new exceptions.ApiValidationError();
      }
      case StatusCode.RESOURCE_NOT_FOUND: {
        throw new exceptions.ResourceNotFoundError();
      }
      case StatusCode.FORBIDDEN: {
        throw new exceptions.ForbiddenError();
      }
      case StatusCode.BAD_REQUEST: {
        throw new exceptions.BadRequestError();
      }
      case StatusCode.INTERNAL_ERROR:
      default: {
        throw new exceptions.ApiInternalError();
      }
    }
  }

  async get<TResponse = any>(url: string): Promise<TResponse> {
    try {
      const response = await this.axiosInstance.get(url);
      return response.data;
    } catch (error) {
      if (!error.response) {
        throw new exceptions.NoApiResponseError();
      }
      this.throwBasedOnStatusCode(error.response);
    }
  }
}

export default HttpClient.getInstance();
