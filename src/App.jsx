import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import LoginRegisterLayout from "./layouts/LoginRegisterLayout";
import ErrorPage from "./pages/ErrorPage";
import FeedPage from "./pages/FeedPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import UsersPage from "./pages/UsersPage";

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
