import axios, { AxiosDefaults, AxiosInstance, AxiosRequestConfig } from 'axios';
import { InterceptorHandler } from './types';

export function interceptorFactory(
  handler: InterceptorHandler,
): InterceptorHandler {
  if (typeof handler !== 'function') {
    return (data: unknown) => Promise.reject(data);
  }

  return (data: unknown) => {
    const forward = handler(data);
    return forward instanceof Promise ? forward : Promise.reject(data);
  };
}
export class HttpClient {
  private static instances = new Set<AxiosInstance>();

  private static responseErrorInterceptors = new Map<
    InterceptorHandler,
    { id: number; instance: AxiosInstance }[]
  >();

  protected static createInstance(config?: AxiosRequestConfig): AxiosInstance {
    const instance = axios.create(config);
    this.registerAllInterceptorsToInstance(instance);
    this.instances.add(instance);
    return instance;
  }

  static axiosDefaults(defaults: AxiosDefaults): void {
    axios.defaults = defaults;
  }

  static subscribeAxiosResponseError(handler: InterceptorHandler): number {
    return axios.interceptors.response.use(
      undefined,
      interceptorFactory(handler),
    );
  }

  static unsubscribeAxiosResponseError(subscriptionId: number): void {
    axios.interceptors.response.eject(subscriptionId);
  }

  static subscribeAnyInstanceResponseError(handler: InterceptorHandler): void {
    if (!this.responseErrorInterceptors.has(handler)) {
      this.responseErrorInterceptors.set(handler, []);
    }

    this.registerInterceptorToAllInstances(handler);
  }

  static unsubscribeAnyInstanceResponseError(
    handler: InterceptorHandler,
  ): void {
    this.responseErrorInterceptors.get(handler)?.forEach((o) => {
      o.instance.interceptors.response.eject(o.id);
    });
  }

  private static registerAllInterceptorsToInstance(instance: AxiosInstance) {
    this.responseErrorInterceptors.forEach((value, handler) => {
      const instanceInterceptorId = instance.interceptors.response.use(
        undefined,
        interceptorFactory(handler),
      );
      value.push({ id: instanceInterceptorId, instance });
    });
  }

  private static registerInterceptorToAllInstances(
    handler: InterceptorHandler,
  ) {
    this.instances.forEach((instance) => {
      const id = instance.interceptors.response.use(
        undefined,
        interceptorFactory(handler),
      );
      this.responseErrorInterceptors.get(handler)?.push({ id, instance });
    });
  }
}
