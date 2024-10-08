import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productDetailsApi = createApi({
    reducerPath: "productDetailsApi",
    baseQuery: fetchBaseQuery({
      baseUrl: "https://fakestoreapi.com/",
    }),
    endpoints: (builder) => ({
      getProductDetails: builder.query({
        query: () => `/products${id}`
      }),
    }),
  });
    
  export const { useGetProductDetailsQuery } = productDetailsApi;