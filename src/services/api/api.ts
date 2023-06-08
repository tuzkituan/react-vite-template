// services/api.ts
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { isApiError, isFetchBaseQueryError } from '../helpers';
import { RootState } from '@/store/rootReducer';
import { PROXY } from '@/config/proxy';

// Define a service using a base URL and expected endpoints
const baseQuery = fetchBaseQuery({
  baseUrl: PROXY.BASE_API,
  prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const { token } = (getState() as RootState).auth;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
      headers.set('Content-Type', 'application/json;charset=UTF-8');
      headers.set('Access-Control-Allow-Origin', '*');
    }
    return headers;
  },
});

const customBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  const { data = {}, error = {} } = result as any;
  const { statusCode, data: responseData } = data;

  if (error?.status === 401 || statusCode === 401) {
    // handle logout
  }
  if (statusCode >= 200 && statusCode < 300 && responseData) {
    return { data: responseData };
  }

  if (isFetchBaseQueryError(error)) {
    const errObj: any = 'error' in error ? error.error : error.data;
    const errMsg =
      typeof errObj?.message === 'string'
        ? errObj.message
        : JSON.stringify(errObj);
    const errorData = { ...error, message: errMsg } as any;
    return { error: errorData };
  }

  if (isApiError(data)) {
    const errorMessage = data.data[0].defaultMessage;
    const errorData = { ...error, message: errorMessage } as any;
    return { error: errorData };
  }

  return result;
};

export const api = createApi({
  /**
   * `reducerPath` is optional and will not be required by most users.
   * This is useful if you have multiple API definitions,
   * e.g. where each has a different domain, with no interaction between endpoints.
   * Otherwise, a single API definition should be used in order to support tag invalidation,
   * among other features
   */
  reducerPath: 'splitApi',
  /**
   * A bare bones base query would just be `baseQuery: fetchBaseQuery({ baseUrl: '/' })`
   */
  baseQuery: customBaseQuery,
  /**
   * Tag types must be defined in the original API definition
   * for any tags that would be provided by injected endpoints
   */
  tagTypes: ['Auth', 'Counter'],
  /**
   * This api has endpoints injected in adjacent files,
   * which is why no endpoints are shown below.
   * If you want all endpoints defined in the same file, they could be included here instead
   */
  endpoints: () => ({}),
});
