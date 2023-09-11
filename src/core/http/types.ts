export type InterceptorHandler =
  | ((data: unknown) => void)
  | ((data: unknown) => Promise<unknown>);
