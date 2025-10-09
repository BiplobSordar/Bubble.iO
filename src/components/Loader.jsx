
import React from "react";

const Loader = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-transparent z-20">
      <div className="relative w-12 h-12">
        <div className="loader w-12 h-12 rounded-full border-t-4 border-white border-r-4 border-transparent animate-spin"></div>
        <div className="absolute top-0 left-0 w-12 h-12 rounded-full border-l-4 border-[#FF3D00] border-b-4 border-transparent animate-spin animation-reverse"></div>
      </div>
    </div>
  );
};

export default Loader; 