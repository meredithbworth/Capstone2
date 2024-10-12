import { configureStore } from "@reduxjs/toolkit";
import { productsListApi } from "../api/productsListApi";
// import { productDetailsApi } from "../api/productDetailsApi";

export const store = configureStore({
  reducer: {
    [productsListApi.reducerPath]: productsListApi.reducer, 
    // [productDetailsApi.reducerPath]:
    // productDetailsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsListApi.middleware),
});

export default store;