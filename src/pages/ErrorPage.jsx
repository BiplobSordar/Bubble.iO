import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center justify-center h-screen px-4 text-center ">
      
      <img
        src="/assets/App-Error.png" 
        alt="Error"
        className="w-64 md:w-96 mb-8"
      />

      <h1 className="text-[43px] md:text-5xl font-bold text-[#001931] mb-4">
        Oops! Something went wrong
      </h1>

      <p className="text-[#627382]text-lg md:text-xl mb-8 max-w-xl">
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable. Please try going back to the homepage.
      </p>

      <button
        onClick={() => navigate("/")}
        className="gradient-bg   text-white font-semibold px-6 py-3 rounded-md transition-transform duration-200 hover:scale-105"
      >
        Go Back Home
      </button>

    </section>
  );
};

export default ErrorPage;
