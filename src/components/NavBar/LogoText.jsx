import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAccessToken } from "../../features/slice/authSlice";

const LogoText = () => {
  const currentAccessToken = useSelector(getAccessToken);
  return currentAccessToken ? (
    <Link className="font-bold text-pink-400 text-2xl" to="/">
      TweetX
    </Link>
  ) : (
    <Link className="font-bold text-pink-400 text-2xl" to="/auth/login">
      TweetX
    </Link>
  );
};

export default LogoText;
