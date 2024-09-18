import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getAllFoodsApiBody } from '../../types/apiSlices/foodCart';

const retrievedStoreStr = localStorage.getItem('cartItems') // this is a string
// const retrievedStore = JSON.parse(retrievedStoreStr) // this will be a JSON object
// const reducer1 = retrievedStore.reducer1 // should now have your reducer


export const foodApi = createApi({
  reducerPath: 'foodApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5001/api' }),
  endpoints: (builder) => ({
    getAllFoods: builder.query<getAllFoodsApiBody, string>({
      query: () => ({
        url: '/food/getAll',
        method: 'GET',
        // headers:{Authorization:`Bearer ${localStorage.getItem()}`}
      }),
    }),
  }),
});

export const { useGetAllFoodsQuery } = foodApi;
