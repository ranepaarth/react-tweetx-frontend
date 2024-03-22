import { logout, setAccessToken, setCurrentUserId } from "../slice/authSlice";
import { apiSlice } from "./apiSlice";

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (credentials) => ({
        url: "/auth/register",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      async onQueryStarted(arg, api) {
        try {
          await api.queryFulfilled;
          api.dispatch(logout());
          setTimeout(() => {
            api.dispatch(apiSlice.util.resetApiState());
          }, 1000);
        } catch (error) {
          console.log(error);
        }
      },
    }),
    refreshLoginUser: builder.mutation({
      query: () => ({
        url: "/auth/refresh",
        method: "GET",
      }),
      async onQueryStarted(arg, api) {
        try {
          const { data } = await api.queryFulfilled;
          api.dispatch(setAccessToken(data.accessToken));
          api.dispatch(setCurrentUserId(data.userId));
        } catch (error) {
          console.log(error);
        }
      },
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        method: "PATCH",
        url: "/auth/reset",
        body: data,
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useRefreshLoginUserMutation,
  useResetPasswordMutation,
} = authApiSlice;
