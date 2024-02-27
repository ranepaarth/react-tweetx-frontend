import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
// Using the above import statement does'nt provide us the mutation hooks
// This is because the hooks are part of react. Thus changed the import path

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}`,
  }),
  tagTypes: ["Users", "Tweets", "UserProfile"],
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["Users"],
    }),
    getAllTweets: builder.query({
      query: (userId) => ({
        url: `/tweets/timeline/all/${userId}`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["Tweets"],
    }),
    getCurrUserTweets: builder.query({
      query: (userId) => ({
        url: `/tweets/user/${userId}`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["Tweets"],
    }),
    getSingleUser: builder.query({
      query: (followingId) => ({
        url: `/users/${followingId}`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["User", "UserProfile"],
    }),
    getSingleUserProfile: builder.query({
      query: (userName) => ({
        url: `/users/profile/${userName}`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["UserProfile"],
    }),
    followUser: builder.mutation({
      query: ({ userId, currUserId }) => ({
        url: `/timeline/follow/${userId}`,
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: { userId: currUserId },
        credentials: "include",
      }),
      invalidatesTags: ["Tweets", "User", "UserProfile"],
    }),
    unFollowUser: builder.mutation({
      query: ({ userId, currUserId }) => {
        return {
          url: `/timeline/unfollow/${userId}`,
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: { userId: currUserId },
          credentials: "include",
        };
      },
      invalidatesTags: ["Tweets", "User", "UserProfile"],
    }),
    registerUser: builder.mutation({
      query: (data) => ({
        url: "/users/register",
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: data,
        credentials: "include",
      }),
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/users/auth",
        headers: {
          "Content-type": "application/json",
        },
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["User"],
    }),
    logoutUser: builder.mutation({
      query: () => ({
        method: "POST",
        url: "/users/logout",
        credentials: "include",
      }),
      invalidatesTags: ["User"],
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        method: "PATCH",
        url: "/users/reset",
        body: data,
        headers: {
          "Content-type": "application/json",
        },
      }),
      invalidatesTags:["User"]
    }),
    createTweet: builder.mutation({
      query: (data) => ({
        url: "/tweets",
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["Tweets", "User"],
    }),
    updateTweet: builder.mutation({
      query: ({ tweetId, content }) => ({
        url: `/tweets/tweet/${tweetId}`,
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: { content },
        credentials: "include",
      }),
      invalidatesTags: ["Tweets"],
    }),
    deleteTweet: builder.mutation({
      query: (tweetId) => ({
        url: `/tweets/delete/${tweetId}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["Tweets", "User"],
    }),
  }),
});

export const {
  useGetAllTweetsQuery,
  useGetAllUsersQuery,
  useGetSingleUserQuery,
  useGetCurrUserTweetsQuery,
  useGetSingleUserProfileQuery,
  useLoginUserMutation,
  useLogoutUserMutation,
  useRegisterUserMutation,
  useResetPasswordMutation,
  useCreateTweetMutation,
  useFollowUserMutation,
  useUnFollowUserMutation,
  useUpdateTweetMutation,
  useDeleteTweetMutation,
} = authApi;
export default authApi.reducer;
