import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "./features/api/apiSlice";
import authSliceReducer from "./features/slice/authSlice";
import tweetsReducer from "./features/slice/tweetsSlice";
import usersReducer from "./features/slice/usersSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSliceReducer,
    users: usersReducer,
    tweets: tweetsReducer,
  },
  devTools: true,
  middleware: (middleware) => middleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);
