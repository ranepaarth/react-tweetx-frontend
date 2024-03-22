import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAccessToken } from "../features/slice/authSlice";

const ErrorPage = () => {
  const accessToken = useSelector(getAccessToken);

  return (
    <section className="min-h-full flex flex-col items-center justify-center">
      <span className="font-extrabold text-5xl my-4">404</span>
      <p className="text-center text-xs px-14">
        Sorry we couldn't find this page. But don't worry, you can find plenty
        of other things {accessToken ? " on our " : " once "}
        <Link
          to={!accessToken ? "/auth/login" : "/"}
          className="text-pink-500 px-1 hover:underline"
        >
          {!accessToken ? "Login" : "homepage"}
        </Link>
      </p>
    </section>
  );
};

export default ErrorPage;
