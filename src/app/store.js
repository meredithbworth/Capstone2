import { configureStore } from "@reduxjs/toolkit";
import { productsListApi } from "../api/productsListApi";

export const store = configureStore({
  reducer: {
    [productsListApi.reducerPath]: productsListApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsListApi.middleware),
});

export default store;