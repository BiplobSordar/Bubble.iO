
import Banner from '../components/Banner';
import AppCard from '../components/AppCard';
import { trendingApps } from '../data/app_data';
import { Link, useNavigate } from 'react-router-dom';
import LogoLoader from '../components/LogoLoader';
import { useEffect, useState } from 'react';
import ErrorPage from './ErrorPage';


const Home = () => {

  const [apps, setApps] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const navigate=useNavigate()

  const fetchApps = async () => {
    try {
      setLoading(true);
      await new Promise((resolve, rej) => setTimeout(resolve, 1500))
      let a = trendingApps.slice(0, 8)
      setApps(a)
    } catch (err) {
      setError(true)
      console.error("App fetch error:", err)
    } finally {
      setLoading(false)
      // setError(false)
    }
  };




  useEffect(() => {
    fetchApps()
  }, [])



  if (loading) return <LogoLoader transparent={true}/>
  
  if (error) return <ErrorPage />



  return (
    <div className="h-full w-full">

      <Banner />

      <section className="py-16 px-4 md:px-8  ">

        <div className="max-w-7xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#001931] mb-4">
            Trending Apps
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>


        <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center my-5 max-w-[1400px] ">
          {apps.map((app) => (
            <Link to={`/apps/${app.id}`} key={app.id}>

              <AppCard
                app={app}
                key={app.id}
              />
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button onClick={()=>{navigate('/apps')}}

            className="gradient-bg  mt-5 hover:bg-[#9F62F2] text-white font-semibold px-6 py-3 rounded-md transition-transform duration-200 hover:scale-105"
          >
            Load More
          </button>
        </div>
      </section>

    </div>
  );
};

export default Home;

