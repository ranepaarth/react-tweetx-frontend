import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="min-h-full flex flex-col items-center justify-center">
      <span className="font-extrabold text-5xl my-4">404</span>
      <p className="text-center text-xs px-14">
        Sorry we couldn't find this page. But don't worry, you can find plenty
        of other things on our{" "}
        <Link to="/" className="text-pink-500 px-1 hover:underline">
          homepage
        </Link>
      </p>
    </section>
  );
};

export default ErrorPage;
