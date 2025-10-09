import React, { useEffect, useState } from "react";
import AppCard from "../components/AppCard";
import { trendingApps } from "../data/app_data";
import Loader from "../components/Loader";
import { X } from "lucide-react";
import ErrorPage from "./ErrorPage";
import { Link, useNavigate } from "react-router-dom";
import LogoLoader from "../components/LogoLoader";

const AllAppsPage = () => {
  const navigate = useNavigate()

  const [apps, setApps] = useState([])

  const [filtredApps, setFiltredApps] = useState([])
  
  const [loading, setLoading] = useState(false)

  const [searchLoading, setSearchLoading] = useState(false)

  const [searchTerm, setSearchTerm] = useState("")

  const [error, setError] = useState(false)

  const fetchApps = async () => {
    try {
      setLoading(true)

      await new Promise((resolve,rej) => setTimeout(resolve, 1500))

      setApps(trendingApps)

      setFiltredApps(trendingApps)

    } catch (err) {
      setError(true)

      console.error("App fetch error:", err)

    } finally {

      setLoading(false);
    }
  };


  useEffect(() => {
    fetchApps();
  }, []);

  useEffect(() => {

    if (searchTerm === "") {

      setFiltredApps(apps)

      setSearchLoading(false)
      return;
    }



    setSearchLoading(true)

    const start = setTimeout(() => {

      const filtredAppss = apps.filter((app) =>

        app.title.toLowerCase().includes(searchTerm.toLowerCase())
      )

      setFiltredApps(filtredAppss)

      setSearchLoading(false)
    }, 1000)



    return () => clearTimeout(start)




  }, [apps, searchTerm])



  if (loading) return <Loader />
  
  if (error) return <ErrorPage />

  return (
    <section className="py-16 px-4 md:px-8">

      <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-7xl mx-auto mb-8 gap-4">


        <h1 className="text-2xl md:text-3xl font-bold text-[#001931]">

          ({filtredApps.length}) Apps
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

      <div className="w-full relative mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center max-w-[1400px]">
        {
          searchLoading ? <LogoLoader transparent={true}/> :
            filtredApps.length > 0 ? filtredApps.map((app) => (

              <Link to={`/apps/${app.id}`}>

                <AppCard key={app.id} app={app} />
              </Link>
            )) : <div className="w-full min-h-[60vh] col-span-4 flex flex-col items-center justify-center py-20 gap-6 rounded-2xl bg-white">
              <h2 className="text-4xl md:text-5xl font-bold text-[#001931] text-center w-full">
                No Apps Found
              </h2>
              <p className="text-xl md:text-2xl text-[#627382] text-center max-w-3xl w-full">
                We couldn't find any apps matching your search. Try clearing the search to see all apps.
              </p>

              <button onClick={() => {
                setSearchTerm('')
                navigate('/apps')
              }}
                className="px-8 py-4 gradient-bg cursor-pointer text-white font-semibold rounded-md hover:bg-[#4a22b8] transition"
              >
                Show All Apps
              </button>

            </div>
        }



      </div>


    </section>
  );
};

export default AllAppsPage;
