import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const retrievedStoreStr = localStorage.getItem('persist:cartItems');
const parsevalue = JSON.parse(retrievedStoreStr ? retrievedStoreStr : '');
const token = JSON.parse(parsevalue.userReducer).token;
// console.log(token);

export const foodApi = createApi({
  reducerPath: 'foodApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5001/api',
    prepareHeaders: (headers) => {
      token && headers.set('Authorization', `Bearer ${token}`);
    },
  }),
  endpoints: (builder) => ({
    getAllFoods: builder.query({
      query: () => ({
        url: '/food/getAll',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllFoodsQuery } = foodApi;
