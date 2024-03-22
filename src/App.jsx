import React from "react";
import { Route, Routes } from "react-router-dom";
import PersistLogin from "./components/PersistLogin.jsx";
import PrefetchComponent from "./components/PrefetchComponent.jsx";
import AppLayout from "./layouts/AppLayout.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
const LoginPage = React.lazy(() => import("./pages/LoginPage.jsx"));
const ProfilePage = React.lazy(() => import("./pages/ProfilePage.jsx"));
const RegisterPage = React.lazy(() => import("./pages/RegisterPage.jsx"));
const ResetPasswordPage = React.lazy(() =>
  import("./pages/ResetPasswordPage.jsx")
);
const UsersPage = React.lazy(() => import("./pages/UsersPage.jsx"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage.jsx"));
const FeedPage = React.lazy(() => import("./pages/FeedPage.jsx"));
const SingleUserPage = React.lazy(() => import("./pages/SingleUserPage.jsx"));
const SavedTweetsPage = React.lazy(() => import("./pages/SavedTweetsPage.jsx"));

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route element={<AuthLayout />}>
        <Route path="/auth/login" index element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/auth/reset" element={<ResetPasswordPage />} />
      </Route>

      <Route element={<PersistLogin />}>
        <Route element={<PrefetchComponent />}>
          <Route path="/" element={<AppLayout />} errorElement={<ErrorPage />}>
            <Route index element={<ProfilePage />} />
            <Route path="users" element={<UsersPage />} />
            <Route path=":name" element={<SingleUserPage />} />
            <Route path="feed" element={<FeedPage />} />
            <Route path="saved" element={<SavedTweetsPage />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
