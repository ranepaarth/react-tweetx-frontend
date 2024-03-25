import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { setCurrentUser } from "../slice/usersSlice";
import { apiSlice } from "./apiSlice";
const usersAdapter = createEntityAdapter({});

const initialState = usersAdapter.getInitialState();

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "/users/all",

      validateStatus: (response, result) =>
        response.status === 200 && !result.isError,
      transformResponse: (response) => {
        const loadedData = response.map((user) => {
          user.id = user._id;
          return user;
        });
        return usersAdapter.setAll(initialState, loadedData);
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "User", id: "LIST" },
            ...result.ids.map((id) => ({ type: "User", id })),
          ];
        } else return [{ type: "User", id: "LIST" }];
      },
    }),
    getCurrUserProfile: builder.query({
      query: () => "/users/profile",
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCurrentUser(data));
        } catch (error) {
          console.log(error);
        }
      },
      providesTags: ["Profile"],
    }),
    getSearchUsers: builder.query({
      query: (userName) => `/users/search/${userName}`,
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
    }),
    getUserProfile: builder.query({
      query: (userName) => `/users/profile/${userName}`,
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
    }),
    followUser: builder.mutation({
      query: (userId) => ({
        url: "/users/handle-follow",
        method: "PATCH",
        body: { userId },
      }),
      invalidatesTags: [{ type: "User", id: "LIST" }, "Profile", "Tweet"],
    }),
    unFollowUser: builder.mutation({
      query: (userId) => ({
        url: "/users/handle-unfollow",
        method: "PATCH",
        body: { userId },
      }),
      invalidatesTags: [{ type: "User", id: "LIST" }, "Profile", "Tweet"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetCurrUserProfileQuery,
  useGetSearchUsersQuery,
  useGetUserProfileQuery,
  useFollowUserMutation,
  useUnFollowUserMutation,
} = usersApiSlice;

export const selectUsersResult = usersApiSlice.endpoints.getAllUsers.select();

const allUsersData = createSelector(selectUsersResult, (usersResult) => {
  return usersResult.data;
});

export const {
  selectAll: selectAllUsers,
  selectById,
  selectIds: selectUserIds,
} = usersAdapter.getSelectors((state) => allUsersData(state) ?? initialState);
