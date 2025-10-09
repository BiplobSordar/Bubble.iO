import React from "react";

const AboutPage = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#001931] mb-4">
          About Us
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
          We are a passionate team dedicated to building innovative and user-friendly applications that empower users worldwide. Our mission is to deliver high-quality solutions that seamlessly blend design, functionality, and performance.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <div className="flex justify-center">
          <img
            src="/assets/google1.jpg"
            alt="About"
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </div>

      
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-[#001931]">
            Our Story
          </h2>
          <p className="text-gray-600 text-lg">
            Founded with the vision to innovate in the app development industry, our team combines creativity and technical expertise to produce applications that delight users. Every project we undertake is driven by research, strategy, and user-centered design principles.
          </p>

          <h2 className="text-3xl font-semibold text-[#001931]">
            Our Values
          </h2>
          <p className="text-gray-600 text-lg">
            Integrity, innovation, and user experience are at the core of everything we do. We believe in continuous improvement, staying ahead of technology trends, and creating products that truly make a difference in people's lives.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button className="gradient-bg text-white font-semibold px-6 py-3 rounded-md hover:scale-105 transition-transform">
              Learn More
            </button>
            <button className="border-2 border-[#632EE3] text-[#632EE3] px-6 py-3 rounded-md hover:bg-[#632EE3] hover:text-white transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>

   
      <div className="mt-20 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[#001931] mb-6">Our Mission</h2>
        <p className="text-gray-600 text-lg">
          To empower users globally by providing innovative, reliable, and beautifully designed applications that improve everyday life. We aim to create products that combine technology, creativity, and practicality to achieve a seamless experience.
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
