import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { emptySplitApi } from './emptySplitApi'

export const productsListApi = createApi({
  reducerPath: "productsListApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/",
  }),
  endpoints: (builder) => ({
    getProductsList: builder.query({
      query: () => `/products`
    }),
  }),
  
});

export const { useGetProductsListQuery } = productsListApi;