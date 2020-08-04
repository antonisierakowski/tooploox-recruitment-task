export interface HttpClientInterface {
  get<TResponse = any>(url: string): Promise<TResponse>;
}
