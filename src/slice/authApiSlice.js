import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
// Using the above import statement does'nt provide us the mutation hooks

// This is because the hooks are part of react. Thus changed the import path

export const authApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}`,
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
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
  }),
});

export const {
  useLoginUserMutation,
  useLogoutUserMutation,
  useRegisterUserMutation,
  useResetPasswordMutation,
} = authApi;
export default authApi.reducer;
