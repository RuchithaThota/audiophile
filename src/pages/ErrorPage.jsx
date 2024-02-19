import React from "react";
import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  return (
    <div
      className="h-[100vh] w-full 
    flex justify-center items-center
    bg-custom-gray text-custom-white"
    >
      <div className="flex flex-col justify-start items-start gap-6">
        <h1 className="font-bold text-5xl">{error.status}</h1>
        <h1 className="font-medium text-custom-white-2 text-lg tracking-widest">
          {error.status === 404
            ? "Page Not Found"
            : "Oops! Something went wrong"}
        </h1>
        <Link
          to="/"
          className="
          font-bold text-[13px] uppercase bg-custom-white text-custom-gray
          h-12 px-10 flex justify-center items-center mt-4
          "
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
