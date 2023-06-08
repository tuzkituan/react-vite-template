import { PROXY } from '@/config/proxy';
import type { IAuthResponse } from '../models/authentication/IAuthResponse';
import type { ILoginRequest } from '../models/authentication/ILoginRequest';
import type { IUser } from '../models/authentication/IUser';
import { api } from './api';

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCurrentUser: build.mutation<IUser, void>({
      query: () => ({
        url: PROXY.BASE_API + '/api/usermap/get-current-user',
        method: 'POST',
      }),
      // providesTags: ['Auth'],
    }),
    login: build.mutation<IAuthResponse, ILoginRequest>({
      query: (credentials) => ({
        url: PROXY.BASE_API + '/api/sign-in-tenant',
        method: 'POST',
        body: credentials,
      }),
    }),

    // input full "url" if not using BASE_URL in PROXY
    customAPI: build.mutation<IAuthResponse, ILoginRequest>({
      query: (credentials) => ({
        url: PROXY.TIMESHEET_API + '/timesheet-api/get-something',
        method: 'GET',
        body: credentials,
      }),
    }),
  }),
});

export const { useGetCurrentUserMutation, useLoginMutation } = authApi;
