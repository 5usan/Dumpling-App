import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {apiRoutes, BASE_URL} from '../config/config';

export const dumplingApi = createApi({
  reducerPath: 'dumplingApi',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: builder => ({
    getAllProduct: builder.query({
      query: () => apiRoutes.getAllProduct,
    }),
    getAllCategory: builder.query({
      query: () => apiRoutes.getAllCategory,
    }),
    getAllFeaturedProduct: builder.query({
      query: () => apiRoutes.getAllFeaturedProduct,
    }),
    checkout: builder.mutation({
      query: data => {
        return {
          url: apiRoutes.checkout,
          method: 'POST',
          body: {...data},
        };
      },
    }),
  }),
});

export const {
  useGetAllProductQuery,
  useGetAllCategoryQuery,
  useGetAllFeaturedProductQuery,
  useCheckoutMutation,
} = dumplingApi;
