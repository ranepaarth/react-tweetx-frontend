import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { setSavedTweets } from "../slice/tweetsSlice";
import { apiSlice } from "./apiSlice";

const tweetsAdapter = createEntityAdapter({});

const initialState = tweetsAdapter.getInitialState();

export const tweetsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFeedTweets: builder.query({
      query: () => "/tweets/all",
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
      transformResponse: (response) => {
        const loadedData = response.map((tweet) => {
          tweet.id = tweet._id;
          return tweet;
        });

        return tweetsAdapter.setAll(initialState, loadedData);
      },
      providesTags: (result, err, args) => {
        if (result.ids) {
          return [
            { type: "Tweet", id: "LIST" },
            ...result.ids.map((id) => ({ type: "Tweet", id })),
          ];
        } else return [{ type: "Tweet", id: "LIST" }];
      },
    }),
    getAllSavedTweets: builder.query({
      query: () => ({
        url: "/tweets/saved/all",
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
          dispatch(setSavedTweets(data.savedTweetsIds));
        } catch (error) {
          console.log(error);
        }
      },
      providesTags: [{ type: "Tweet", id: "LIST" }],
    }),
    createTweet: builder.mutation({
      query: (content) => ({
        url: "/tweets/create",
        method: "POST",
        body: content,
      }),
      invalidatesTags: [{ type: "Tweet", id: "LIST" }, "Profile"],
    }),
    deleteTweet: builder.mutation({
      query: (tweetId) => ({
        url: `/tweets/delete/${tweetId}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Tweet", id: "LIST" }, "Profile"],
    }),
    updateTweet: builder.mutation({
      query: ({ content, tweetId }) => ({
        url: `/tweets/update/${tweetId}`,
        method: "PATCH",
        body: { content },
      }),
      invalidatesTags: [{ type: "Tweet", id: "LIST" }, "Profile"],
    }),
    likeTweet: builder.mutation({
      query: ({ tweetId }) => ({
        url: `/tweets/like/${tweetId}`,
        method: "PATCH",
      }),
      invalidatesTags: [{ type: "Tweet", id: "LIST" }, "Profile"],
    }),
    saveTweet: builder.mutation({
      query: ({ tweetId }) => ({
        url: `/tweets/save/${tweetId}`,
        method: "PATCH",
      }),
      invalidatesTags: [{ type: "Tweet", id: "LIST" }, "Profile"],
    }),
  }),
});

export const {
  useGetFeedTweetsQuery,
  useGetAllSavedTweetsQuery,
  useCreateTweetMutation,
  useDeleteTweetMutation,
  useUpdateTweetMutation,
  useLikeTweetMutation,
  useSaveTweetMutation,
} = tweetsApiSlice;

export const selectTweets = tweetsApiSlice.endpoints.getFeedTweets.select();

const tweetsData = createSelector(selectTweets, (tweets) => {
  return tweets.data;
});

export const {
  selectAll: selectAllTweets,
  selectById: selectTweetById,
  selectIds: selectTweetIds,
} = tweetsAdapter.getSelectors((state) => tweetsData(state) ?? initialState);
