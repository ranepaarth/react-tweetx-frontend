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
      query: () => ({
        url: `/tweets/timeline/all`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["Tweets"],
    }),
    getCurrUserTweets: builder.query({
      query: () => ({
        url: `/tweets/user`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["Tweets"],
    }),
    getSingleUser: builder.query({
      query: (userId) => ({
        url: `/users/${userId}`,
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
    getSearchUser: builder.query({
      query: (name) => ({
        url: `/users/search/${name}`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["SearchUsers"],
    }),
    followUser: builder.mutation({
      query: (userId) => ({
        url: `/timeline/follow/${userId}`,
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        credentials: "include",
      }),
      invalidatesTags: ["Tweets", "User", "UserProfile"],
    }),
    unFollowUser: builder.mutation({
      query: (userId) => {
        return {
          url: `/timeline/unfollow/${userId}`,
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
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
      invalidatesTags: ["User"],
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
  useGetSearchUserQuery,
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
