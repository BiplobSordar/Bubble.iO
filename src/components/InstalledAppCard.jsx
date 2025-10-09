import React from "react";

const InstalledAppCard = ({ app }) => {
  const formatNumber = (num) => {
    if (num >= 1_000_000) return Math.round(num / 1_000_000) + "M";
    if (num >= 1_000) return Math.round(num / 1_000) + "K";
    return num.toString();
  };

  return (
    <div className="flex  flex-row justify-between items-start sm:items-center bg-white rounded-lg shadow-sm hover:shadow-md transition p-4 mb-4 w-full">


      <img
        src={app.image}
        alt={app.title}
        className="w-16 h-16 rounded-lg object-cover mb-3 sm:mb-0"
      />


      <div className="flex flex-col lg:flex-col ml-2 sm:flex-row flex-1 justify-between gap-3 sm:gap-6 w-full  sm:ml-4">

        <div className="flex-1">

          <h3 className="text-lg font-semibold text-[#001931]">{app.title}</h3>
        </div>


        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm text-gray-500 items-start sm:items-center">

          <span className="flex items-center gap-1 text-[#00D390]">

            <img
              src="/assets/icon-downloads.png"
              alt="downloads"
              className="h-4 w-4"
            />
            {formatNumber(app.downloads)}

          </span>
          <span className="flex items-center gap-1 text-[#FF8811]">

            <img
              src="/assets/icon-ratings.png"
              alt="rating"
              className="h-4 w-4"
            />
            {app.ratingAvg.toFixed(1)}

          </span>
          <span>{app.size} MB</span>
        </div>
      </div>


      <div className="mt-3 sm:mt-0 sm:ml-4">

        <button
          className="px-4 py-2 bg-[#00D390] hover:bg-red-600 text-white font-semibold rounded-md transition"
          onClick={() => alert(`Uninstalled ${app.title}`)}
        >
          Uninstall
        </button>
        
      </div>
    </div>
  );
};

export default InstalledAppCard;
