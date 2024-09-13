import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsListApi = createApi({
  reducerPath: "productsListApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/",
  }),
  endpoints: (builder) => ({
    getProductsList: builder.query({
      query: () => `products`,
    }),
  }),
    // getProductDetails: builder.query({
    //   query: (id) => `products/${id}`,
    // }),
});

// export const { useGetProductsListQuery, useGetProductDetailsQuery } = productsListApi;

export const { useGetProductsListQuery } = productsListApi;