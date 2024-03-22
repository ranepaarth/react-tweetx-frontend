import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setAccessToken } from "../slice/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_API_URL}`,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const accessToken = getState().auth.accessToken;

    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }

    headers.set("Content-Type", "application/json");

    return headers;
  },
});

// customizing the above baseQuery for refetching the accessToken whenever the accessToken expires with the help of refreshToken(cookies)
const baseQueryWithReAuth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  // if the response of the result is an error with status code 403
  // this means the accessToken expired
  if (result?.error?.status === 403) {
    // sending refreshToken
    console.log("sending refresh token");

    const tokenObject = await baseQuery("/auth/refresh", api, extraOptions);
    console.log({ tokenObject });
    // tokenObject has three property error,data,meta
    if (tokenObject?.data) {
      const { accessToken } = tokenObject.data;

      api.dispatch(setAccessToken(accessToken));

      //   continuing the earlier request which was pending due to expired accessToken
      result = await baseQuery(args, api, extraOptions);
    } else {
      if (tokenObject.error.status === 403) {
        // meaning the refreshToken(cookie) has also been expired.
        tokenObject.error.data.message = "Your login has expired. ";
      }

      //   we will return the tokenObject so that we can display the error message
      return tokenObject;
    }
  }
  // and if the accessToken has not not expired we will return the ongoing query result
  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReAuth,
  tagTypes: ["User", "Profile", "Tweet"],
  endpoints: (builder) => ({}),
});
