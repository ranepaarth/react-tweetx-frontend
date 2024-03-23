import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    currentUserName: null,
    showUserModal: false,
    currentUser: null,
  },
  reducers: {
    setCurrentUserName: (state, action) => {
      state.currentUserName = action.payload;
    },
    toggleShowUserModal: (state, action) => {
      state.showUserModal = !state.showUserModal;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const getCurrentUserName = (state) => state.users.currentUserName;
export const getShowUserModal = (state) => state.users.showUserModal;
export const getCurrentUser = (state) => state.users.currentUser;

export const { setCurrentUserName, toggleShowUserModal, setCurrentUser } =
  usersSlice.actions;

export default usersSlice.reducer;
