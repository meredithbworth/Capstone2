import { configureStore } from "@reduxjs/toolkit";
import { productsListApi } from "../api/productsListApi";
import loginReducers from "../components/AuthSign/LoginReducers"

export const store = configureStore({
  reducer: {
    [productsListApi.reducerPath]: productsListApi.reducer,
    loginReducers, 
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsListApi.middleware),
});

export default store;