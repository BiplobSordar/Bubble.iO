import React, { useState, useEffect } from "react"

import InstalledAppCard from "../components/InstalledAppCard"
import { useData } from "../Context/DataContext";
import { Link } from "react-router-dom";
import LogoLoader from "../components/LogoLoader"


const InstalledAppsPage = () => {
  const { data, setItem, getItem, deleteItem, clearAll } = useData()
  const [loading, setLoading] = useState(false)

  const appsArray = Object.values(data);

  const [apps, setApps] = useState([])
  const [sortOption, setSortOption] = useState("High")






  useEffect(() => {

    const appsArray = Object.values(data)

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
  }, [sortOption, data])



  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {

      setLoading(false);
      
    }, 1000);


    return () => clearTimeout(timer);
  }, []);


  if (loading) return <LogoLoader transparent={true} />

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


          {apps?.length > 0 ? apps.map((app) => (
            <Link to={`/apps/${app.id}`} key={app.id}>


              <InstalledAppCard app={app} deleteItem={deleteItem} />
            </Link>

          )) : <div className="w-full min-h-[60vh] flex flex-col items-center justify-center py-20 gap-6 rounded-2xl bg-white shadow-md">
            
            <h2 className="text-3xl md:text-4xl font-bold text-[#001931] text-center">
              No Installed Apps Yet
            </h2>
            <p className="text-lg md:text-xl text-[#627382] text-center max-w-md">
              You haven’t installed any apps yet. Browse the store and start exploring!
            </p>
            <a
              href="/apps"
              className="px-6 py-3 mt-2 bg-[#632EE3] text-white font-semibold rounded-md hover:bg-[#4a22b8] transition"
            >
              Explore Apps
            </a>
          </div>}

        </div>
      </div>
    </section>
  );
};

export default InstalledAppsPage;
