import { createSlice } from "@reduxjs/toolkit";

const getSessionStorageUser = () => {
  return JSON.parse(sessionStorage.getItem("tweetXUser")) || null;
};

const initialState = {
  currentUser: getSessionStorageUser(),
  showModal: false,
  isTweetUpdating: false,
  tweetToUpdate: null,
  showUserModal: false,
  singleUser: null,
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
    toggleShowModal: (state, action) => {
      // console.log("clicked");
      state.showModal = !state.showModal;
    },
    toggleIsTweetUpdating: (state, action) => {
      state.isTweetUpdating = action.payload;
    },
    setTweetToUpdate: (state, action) => {
      state.tweetToUpdate = action.payload;
    },
    toggleShowUserModal: (state, action) => {
      // console.log("toggleShowUserModal", action.payload);
      state.showUserModal = !state.showUserModal;
    },
    setSingleUser: (state, action) => {
      state.singleUser = action.paylaod;
    },
  },
});

export const getUserData = (state) => state.user.currentUser;
export const getShowModalStatus = (state) => state.user.showModal;
export const getIsTweetUpdating = (state) => state.user.isTweetUpdating;
export const getTweetToUpdate = (state) => state.user.tweetToUpdate;
export const getShowUserModal = (state) => state.user.showUserModal;
export const getSingleUSer = (state) => state.user.singleUser;

export const {
  setCredentials,
  removeCredentials,
  toggleShowModal,
  toggleIsTweetUpdating,
  setTweetToUpdate,
  toggleShowUserModal,
  setSingleUser
} = usersSlice.actions;
export default usersSlice.reducer;
