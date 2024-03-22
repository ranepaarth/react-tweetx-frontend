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
        console.log("verifying refresh token");
        await refreshLoginUser();
      } catch (error) {
        console.log(error);
      }
    };

    if (!currentAccessToken && persist) {
      // console.log({ currentAccessToken });
      verifyRefresh();
    }
  }, []);

  let content;
  if (!persist) {
    // persist:NO
    console.log("no persist");
    content = <Navigate to={"/auth/login"} replace={true} />;
  } else if (isLoading) {
    // persist:YES token:NO
    console.log("loading");
    content = <p></p>;
  } else if (isError) {
    // persist:YES token:NO
    console.log(error);
    content = <NotAuthorized />;
  } else if (isSuccess) {
    // persist:YES token:YES
    console.log("success");
    <Navigate to={"/"} replace={true} />;
    content = <Outlet />;
  } else if (currentAccessToken && isUninitialized) {
    // persist:YES token:YES

    // we already have token and refreshLoginUser is uninitialized
    console.log("token and uninitialized");
    console.log(isUninitialized);
    content = <Outlet />;
  }
  return content;
};

export default PersistLogin;
