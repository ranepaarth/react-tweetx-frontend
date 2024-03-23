import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { useRefreshLoginUserMutation } from "../features/api/authApiSlice";
import { getAccessToken } from "../features/slice/authSlice";
import useCustomPersist from "../hooks/useCustomPersist";
import NotAuthorized from "./NotAuthorized";

const PersistLogin = () => {
  const [persist] = useCustomPersist();
  const currentAccessToken = useSelector(getAccessToken);

  const [
    refreshLoginUser,
    { error, isError, isLoading, isSuccess, isUninitialized },
  ] = useRefreshLoginUserMutation();

  useEffect(() => {
    const verifyRefresh = async () => {
      try {
        await refreshLoginUser();
      } catch (error) {
        console.log(error);
      }
    };

    if (!currentAccessToken && persist) {
      verifyRefresh();
    }
  }, []);

  let content;
  if (!persist) {
    // persist:NO
    content = <Navigate to={"/auth/login"} replace={true} />;
  } else if (isLoading) {
    // persist:YES token:NO
    content = <p></p>;
  } else if (isError) {
    // persist:YES token:NO
    content = <NotAuthorized />;
  } else if (isSuccess) {
    // persist:YES token:YES
    <Navigate to={"/"} replace={true} />;
    content = <Outlet />;
  } else if (currentAccessToken && isUninitialized) {
    // persist:YES token:YES

    // we already have token and refreshLoginUser is uninitialized
    content = <Outlet />;
  }
  return content;
};

export default PersistLogin;
