import React, { useState, useEffect } from "react"

import InstalledAppCard from "../components/InstalledAppCard"
import { useData } from "../Context/DataContext";
import { Link } from "react-router-dom";

const InstalledAppsPage = () => {
  const { data, setItem, getItem, deleteItem, clearAll } = useData()

  const appsArray = Object.values(data);

  const [apps, setApps] = useState([])
  const [sortOption, setSortOption] = useState("High")




  

  useEffect(() => {
    const appsArray = Object.values(data);
    if (sortOption === 'High') {
      const highToLow = [...appsArray].sort((a, b) => b.downloads - a.downloads)
      setApps(highToLow)
      return
    }

    if (sortOption === 'Low') {
      const lowToHigh = [...appsArray].sort((a, b) => a.downloads - b.downloads)
      setApps(lowToHigh)
      return
    }
  }, [sortOption,data])




  return (

    <section className="py-16 px-4 md:px-8">

      <div className="max-w-7xl mx-auto text-center mb-12">

        <h1 className="text-4xl md:text-5xl font-bold text-[#001931] mb-4">
          Your Installed Apps
        </h1>

        <p className="text-gray-600 text-lg md:text-xl">
          Explore All Trending Apps on the Market developed by us
        </p>

      </div>


      <div className="max-w-7xl mx-auto mb-8 px-4 py-6  ">

        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">

          <h2 className="text-2xl md:text-3xl font-bold text-[#001931]">
            ({appsArray.length}) Installed Apps
          </h2>

          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}

            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#632EE3]"
          >
            <option value="High">High</option>
            <option value="Low">Low</option>

          </select>
        </div>




        <div className="flex flex-col divide-y divide-gray-200">

          {apps.map((app) => (
            <Link to={`/apps/${app.id}`} key={app.id}>


              <InstalledAppCard app={app} deleteItem={deleteItem} />
            </Link>

          ))}
        </div>
      </div>
    </section>
  );
};

export default InstalledAppsPage;
