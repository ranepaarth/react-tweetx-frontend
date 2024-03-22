import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: null,
    currentUserId: null,
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    logout: (state, action) => {
      state.accessToken = null;
    },
    setCurrentUserId: (state, action) => {
      state.currentUserId = action.payload;
    },
  },
});

export const getAccessToken = (state) => state.auth.accessToken;
export const getCurrentUserId = (state) => state.auth.currentUserId;
export const { setAccessToken, logout, setCurrentUserId } = authSlice.actions;

export default authSlice.reducer;
