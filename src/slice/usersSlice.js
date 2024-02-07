import { createSlice } from "@reduxjs/toolkit";

const getSessionStorageUser = () => {
  return JSON.parse(sessionStorage.getItem("tweetXUser")) || null;
};

const initialState = {
  currentUser: getSessionStorageUser(),
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.currentUser = action.payload;
      sessionStorage.setItem("tweetXUser", JSON.stringify(action.payload));
      state.isLoading = "idle";
      state.error = null;
    },
    removeCredentials: (state, action) => {
      state.currentUser = null;
      sessionStorage.removeItem("tweetXUser");
    },
  },
});

export const getUserData = (state) => state.user.currentUser;
export const { setCredentials, removeCredentials } = usersSlice.actions;
export default usersSlice.reducer;
