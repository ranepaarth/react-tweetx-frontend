import React from "react";
import { PiProhibitBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const NotAuthorized = () => {
  return (
    <article className="w-full min-h-screen flex flex-col items-center justify-center">
      <span>
        <PiProhibitBold className="text-9xl text-neutral-700" />
      </span>
      <p className="text-3xl font-medium text-neutral-800">
        You are not authorized
      </p>
      <p className="text-sm font-semibold text-neutral-500 my-4">
        It seems you don&apos;t have permission to access this page.
      </p>
      <Link to="/auth/login" className="font-extrabold text-pink-500 text-xl">
        Continue login
      </Link>
    </article>
  );
};

export default NotAuthorized;
