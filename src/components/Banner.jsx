import React from 'react';
import { Link } from 'react-router-dom';


const Banner = () => {
  return (
    <section className=" py-16  w-full  ">
      <div className="w-full grid grid-cols-1  items-center">


        <div className="text-center lg:text-left space-y-6">
          <h1 className="text-[38px] md:text-[50px] lg:text-[72px] max-w-2xl  text-center mx-auto font-bold text-[#001931]  leading-tight">
            We Build <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Productive</span>
            Apps
          </h1>
          <p className="text-[#627382] text-center text-lg max-w-4xl mx-auto">
            At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
            <Link to={'https://www.apple.com/app-store/'}>

              <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 bg-[rgba(0,0,0,0.0001)] text-[#001931] font-semibold  cursor-pointer    rounded-md hover:bg-white transition">
                <img src="/assets/app-store.png" alt="logo" className='h-5 w-5' />
                <span>App Store</span>
              </button>
            </Link>

            <Link to={'https://play.google.com/'}>
              <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 bg-[rgba(0,0,0,0.0001)] over:bg-[#f5f5f5f] text-[#001931]   cursor-pointer      font-semibold rounded-md hover:bg-white transition">
                <img src="/assets/playstore.png" alt="Logo" className='h-5 w-5' />
                <span>Google Play</span>
              </button>
            </Link>
          </div>

        </div>


        <div className="flex justify-center  lg:justify-end mt-5 w-full ">
          <img src='/assets/hero.png' alt="Banner" className="w-[80%] lg:w-[50%] mx-auto   object-contain" />
        </div>



        <div className="w-full gradient-bg py-16">

          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white text-center mb-12">
            Trusted by Millions, Built for You
          </h1>

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center w-full">
            <div className="space-y-2">
              <p className="text-white">Total Downloads</p>
              <h2 className="text-6xl font-bold text-white">29.9M</h2>
              <span className="text-white bg-clip-text  font-semibold">21% more than last month</span>
            </div>
            <div className="space-y-2">
              <p className="text-white">Total Reviews</p>
              <h2 className="text-6xl font-bold text-white">906K</h2>
              <span className="text-white bg-clip-text  font-semibold">46% more than last month</span>
            </div>
            <div className="space-y-2">
              <p className="text-white">Active Apps</p>
              <h2 className="text-6xl font-bold text-white">132+</h2>
              <span className="text-white bg-clip-text  font-semibold">31 more will Launch</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;
