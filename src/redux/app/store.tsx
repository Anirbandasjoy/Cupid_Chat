import { configureStore } from "@reduxjs/toolkit";
import baseAuthApi from "../api/baseApi";
export const store = configureStore({
  reducer: {
    [baseAuthApi.reducerPath]: baseAuthApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseAuthApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
