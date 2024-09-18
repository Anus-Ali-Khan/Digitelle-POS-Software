  import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { loginApiBody } from '../../types/apiSlices/auth';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5001/api' }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: ({ email, password }: loginApiBody) => ({
        url: '/auth/login',
        method: 'POST',
        body: {
          email,
          password,
        },
      }),
    }),
  }),
});

export const { useLoginUserMutation } = authApi;
