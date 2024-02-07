import { configureStore } from "@reduxjs/toolkit";
import authApiReducer, { authApi } from "./slice/authApiSlice";
import userReducer from "./slice/usersSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (middleware) => middleware().concat(authApi.middleware),
});
