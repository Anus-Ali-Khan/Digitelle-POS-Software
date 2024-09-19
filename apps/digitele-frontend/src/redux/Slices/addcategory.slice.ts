import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { categoryApiBody } from '../../types/apiSlices/category';

const retrievedStoreStr = localStorage.getItem('persist:cartItems');
const parsevalue = JSON.parse(retrievedStoreStr ? retrievedStoreStr : '{}');
const token = JSON.parse(
  parsevalue?.userReducer ? parsevalue?.userReducer : '{}'
)?.token;

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5001/api',
    prepareHeaders: (headers) => {
      token && headers.set('Authorization', `Bearer ${token}`);
    },
  }),
  endpoints: (builder) => ({
    addCategory: builder.mutation({
      query: ({ name, image }: categoryApiBody) => ({
        url: '/category/create',
        method: 'POST',
        body: {
          name,
          // image
        },
      }),
    }),
    getAllCategories: builder.query({
      query: () => ({
        url: '/category/getAll',
        method: 'GET',
      }),
    }),
  }),
});

export const { useAddCategoryMutation, useGetAllCategoriesQuery } = categoryApi;
