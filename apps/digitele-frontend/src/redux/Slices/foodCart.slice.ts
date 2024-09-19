import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { itemsApiBody } from '../../types/apiSlices/item';

const retrievedStoreStr = localStorage.getItem('persist:cartItems');
const parsevalue = JSON.parse(retrievedStoreStr ? retrievedStoreStr : '{}');
const token = JSON.parse(
  parsevalue?.userReducer ? parsevalue?.userReducer : '{}'
)?.token;
// console.log(token);

export const foodApi = createApi({
  reducerPath: 'foodApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5001/api',
    prepareHeaders: (headers) => {
      token && headers.set('Authorization', `Bearer ${token}`);
    },
  }),
  tagTypes: ['ListAllFoods'],
  endpoints: (builder) => ({
    getAllFoods: builder.query({
      query: () => ({
        url: '/food/getAll',
        method: 'GET',
      }),
      providesTags: ['ListAllFoods'],
    }),
    addItem: builder.mutation({
      query: ({ name, price, picUrl, categoryId }: itemsApiBody) => ({
        url: '/food/create',
        method: 'POST',
        body: {
          name,
          price,
          // picUrl,
          categoryId,
        },
      }),
      invalidatesTags: ['ListAllFoods'],
    }),
  }),
});

export const { useGetAllFoodsQuery, useAddItemMutation } = foodApi;
