import React, { useEffect, useState } from "react";
import AppCard from "../components/AppCard";
import { trendingApps } from "../data/app_data";
import Loader from "../components/Loader";
import { X } from "lucide-react";

const AllAppsPage = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchApps = async () => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setApps(trendingApps);
    } catch (err) {
      console.error("App fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    fetchApps();
  }, []);

  if (loading) return <Loader />;

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-7xl mx-auto mb-8 gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-[#001931]">
          {filteredApps.length} Apps
        </h1>

        <div className="relative w-full sm:w-96">
          <input
            type="text"
            placeholder="Search apps..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#632EE3]"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
            >
              <X size={18} />
            </button>
          )}
        </div>
      </div>

      <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center max-w-[1400px]">
        {filteredApps.map((app) => (
          <AppCard key={app.id} product={app} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="gradient-bg mt-5 hover:bg-[#9F62F2] text-white font-semibold px-6 py-3 rounded-md transition-transform duration-200 hover:scale-105">
          Load More
        </button>
      </div>
    </section>
  );
};

export default AllAppsPage;
