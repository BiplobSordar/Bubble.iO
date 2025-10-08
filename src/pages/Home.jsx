
import Banner from '../components/Banner';
import AppCard from '../components/AppCard';
import { trendingApps } from '../data/app_data';


const Home = () => {

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
          {trendingApps.map((project) => (

            <AppCard
              product={project}
              key={project.id}
            />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button

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

