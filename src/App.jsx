import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import ErrorPage from "./pages/ErrorPage";
import FeedPage from "./pages/FeedPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import UsersPage from "./pages/UsersPage";
import LoginRegisterLayout from "./layouts/LoginRegisterLayout";
import ResetPasswordPage from "./pages/ResetPasswordPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/feed",
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
      element:<LoginRegisterLayout />,
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
          path:'reset',
          element:<ResetPasswordPage/>
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
