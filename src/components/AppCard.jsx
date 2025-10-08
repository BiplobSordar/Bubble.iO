import React from 'react';


const AppCard= ({ product }) => {
  function formatNumber(num) {
    if (num >= 1_000_000) return Math.round(num / 1_000_000) + 'M';
    if (num >= 1_000) return Math.round(num / 1_000) + 'K';
    return num.toString();
  }

  const { image, title, rating, downloads } = product;

  return (
    <div className="max-w-[348px] max-h-[435px] w-[100%]  bg-white rounded-xl overflow-hidden shadow-md flex flex-col transition-transform duration-300 hover:scale-105">
      <div className="h-[70%] w-full p-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      <div className="flex flex-col justify-between h-[25%] p-2">
        <h2 className="text-[20px] font-medium text-[#001931] pl-3">{title}</h2>

        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-1 w-[75px] h-[31px] bg-[#F1F5E8] p-1 rounded-lg">
            <img src="/assets/icon-downloads.png" className="h-[16px] w-[16px]" alt="download icon" />
            <span className="text-[#00D390] text-[16px] font-medium">{formatNumber(downloads)}</span>
          </div>
          <div className="flex items-center justify-center gap-3 w-[75px] h-[31px] bg-[#FFF0E1] p-1 rounded-lg">
            <img src="/assets/icon-ratings.png" className="h-[16px] w-[16px]" alt="rating icon" />
            <span className="text-[16px] font-medium text-[#FF8811]">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
