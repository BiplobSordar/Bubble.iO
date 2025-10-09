import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { trendingApps } from "../data/app_data";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Loader from "../components/Loader";
import { Building2, Download } from "lucide-react";

const SingleAppPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApp = async () => {
      setLoading(true);
      await new Promise((r) => setTimeout(r, 1000));
      const found = trendingApps.find((a) => a.id === parseInt(id));
      setApp(found);
      setLoading(false);
    };
    fetchApp();
  }, [id]);

  if (loading) return <Loader />;



  const ratingData = app.ratings.map((r) => ({ name: r.name, count: r.count }));

  const formatNumber = (num) => {
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
    return num.toString();
  };

  return (
    <section className="py-16 px-4 md:px-8 max-w-[1400px] mx-auto space-y-16">

     

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 bg-white rounded-2xl p-6 md:p-8 shadow-lg">
      
      
        <div className="flex-shrink-0 w-full sm:w-80">
          <img
            src={app.image}
            alt={app.title}
            className="rounded-2xl w-full h-auto shadow-md"
          />
        </div>

        
        
        <div className="flex-1 flex flex-col justify-center text-[#001931]">
         
         
          <div className="pb-6 mb-6 border-b border-gray-300 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] font-extrabold mb-3">{app.title}</h1>
            <p className="flex justify-center lg:justify-start items-center gap-3 text-lg sm:text-xl md:text-2xl lg:text-[32px] text-[#627382]">
              <Building2 size={32} />
              Developed by <span className="font-semibold ml-1 gradient-text">{app.companyName}</span>
            </p>
          </div>



          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 md:gap-10 text-center text-[#001931] font-medium">
            <div className="flex flex-col items-center justify-center w-[120px] sm:w-[140px] md:w-[150px]">

              <Download size={36} className="text-[#00D390]" />

              <span className="text-2xl sm:text-3xl md:text-[32px] font-bold mt-1">{formatNumber(app.downloads)}</span>
              <span className="text-sm sm:text-base md:text-[24px] text-[#627382]">Downloads</span>
            </div>

            <div className="flex flex-col items-center justify-center w-[120px] sm:w-[140px] md:w-[150px]">

              <img src="/assets/icon-ratings.png" alt="rating Image" className="h-10 w-10 md:h-12 md:w-12" />
              <span className="text-2xl sm:text-3xl md:text-[32px] font-bold mt-1">{app.ratingAvg.toFixed(1)}</span>
              <span className="text-sm sm:text-base md:text-[24px] text-[#627382]">Avg Rating</span>
            </div>

            <div className="flex flex-col items-center justify-center w-[120px] sm:w-[140px] md:w-[150px]">

              <img src="/assets/review.png" className="h-10 w-10 md:h-12 md:w-12" alt="reviews" />
              <span className="text-2xl sm:text-3xl md:text-[32px] font-bold mt-1">{formatNumber(app.reviews)}</span>
              <span className="text-sm sm:text-base md:text-[24px] text-[#627382]">Reviews</span>
            </div>

            <div className="flex flex-col items-center justify-center w-[120px] sm:w-[140px] md:w-[150px]">

              <span className="text-[36px] sm:text-[38px] md:text-[40px] leading-none">📦</span>
              <span className="text-2xl sm:text-3xl md:text-[32px] font-bold mt-1">{app.size}</span>
              <span className="text-sm sm:text-base md:text-[24px] text-[#627382]">MB</span>
            </div>
          </div>



          <div className="flex justify-center lg:justify-start mt-8">

            <button className="gradient-bg text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl text-lg sm:text-xl md:text-2xl lg:text-[32px] font-semibold transition-transform duration-200 hover:scale-105">
              Install App
            </button>
          </div>
        </div>
      </div>

   
   
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md">

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[32px] font-bold text-[#001931] mb-6">
          Rating Breakdown
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={[...ratingData].reverse()}
            layout="vertical"
            margin={{ top: 10, right: 30, left: 40, bottom: 10 }}
          >
            <XAxis type="number" stroke="#627382" />
            <YAxis dataKey="name" type="category" stroke="#627382" tick={{ fontSize: 16 }} />
            <Tooltip
              cursor={{ fill: "#f4f4f4" }}
              formatter={(value) => [`${value.toLocaleString()} Reviews`, "Count"]}
            />
            <Bar dataKey="count" fill="#FF8811" radius={[0, 8, 8, 0]} barSize={30} />
          </BarChart>

        </ResponsiveContainer>
      </div>


      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md">

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[32px] font-bold text-[#001931] mb-4">
          About this App
        </h2>
        
        <p className="text-[#627382] leading-relaxed text-sm sm:text-base md:text-lg lg:text-[22px]">
          {app.description}
        </p>
      </div>
    </section>
  );
};

export default SingleAppPage;
