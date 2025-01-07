import { configureStore } from "@reduxjs/toolkit";
import baseAuthApi from "../api/baseApi";
import userReducer from "../features/user/selectUserSlice";
import chatReducer from "../features/chat/chatSlice";

export const store = configureStore({
  reducer: {
    [baseAuthApi.reducerPath]: baseAuthApi.reducer,
    user: userReducer,
    chat: chatReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseAuthApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
