import {
  AxiosDefaults,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
} from 'axios';

import { HttpClient, interceptorFactory } from './client';
import { InterceptorHandler } from './types';

export class Api extends HttpClient {
  public instance: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    super();
    this.instance = HttpClient.createInstance(config);
  }

  protected defaults(defaults: AxiosDefaults): void {
    this.instance.defaults = defaults;
  }

  protected subscribeResponseError(handler: InterceptorHandler): number {
    return this.instance.interceptors.response.use(
      undefined,
      interceptorFactory(handler),
    );
  }

  protected unsubscribeResponseError(subscriptionId: number): void {
    this.instance.interceptors.response.eject(subscriptionId);
  }

  protected request<T>(config: AxiosRequestConfig) {
    return this.instance.request<T>(config);
  }

  get<T>(url: string, params?: unknown, headers?: AxiosRequestHeaders) {
    return this.request<T>({ method: 'get', url, params, headers });
  }

  post<T>(url: string, data: unknown, headers?: AxiosRequestHeaders) {
    return this.request<T>({ method: 'post', url, data, headers });
  }

  put<T>(url: string, data: unknown, headers?: AxiosRequestHeaders) {
    return this.request<T>({ method: 'put', url, data, headers });
  }

  delete<T>(url: string, headers?: AxiosRequestHeaders) {
    return this.request<T>({ method: 'delete', url, headers });
  }
}
