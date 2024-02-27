import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const LoginPage = React.lazy(() => import("./pages/LoginPage.jsx"));
const ProfilePage = React.lazy(() => import("./pages/ProfilePage.jsx"));
const RegisterPage = React.lazy(() => import("./pages/RegisterPage.jsx"));
const ResetPasswordPage = React.lazy(() =>
  import("./pages/ResetPasswordPage.jsx")
);
const UsersPage = React.lazy(() => import("./pages/UsersPage.jsx"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage.jsx"));
const FeedPage = React.lazy(() => import("./pages/FeedPage.jsx"));

import AppLayout from "./layouts/AppLayout.jsx";
import LoginRegisterLayout from "./layouts/LoginRegisterLayout.jsx";
import SingleUserProfile from "./components/SingleUserPage/SingleUserProfile.jsx";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <FeedPage />,
        },
        {
          path: "/users",
          element: <UsersPage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/user/:name",
          element: <SingleUserProfile />,
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
    {
      path: "/user",
      element: <LoginRegisterLayout />,
      children: [
        {
          index: true,
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "register",
          element: <RegisterPage />,
        },
        {
          path: "reset",
          element: <ResetPasswordPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
