import React from "react";

const LogoLoader = ({ transparent = false }) => {
  return (
    <div
      className={`w-full h-screen flex col-span-4 justify-center items-center 
        ${transparent ? "bg-transparent" : "bg-white"}`}
    >
      <img
        src={"/assets/logo.png"}
        alt="Loading..."
        className="w-24 h-24 animate-spin-slow"
      />
    </div>
  );
};

export default LogoLoader;
