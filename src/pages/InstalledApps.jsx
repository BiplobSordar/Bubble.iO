import React, { useState, useEffect } from "react"

import InstalledAppCard from "../components/InstalledAppCard"

const InstalledAppsPage = () => {
  const [apps, setApps] = useState([])

  const [searchTerm, setSearchTerm] = useState("")

  const [sortOption, setSortOption] = useState("name")
  
  const [filteredApps, setFilteredApps] = useState([])

  useEffect(() => {
    setApps([{
      id: 2,
      image: "/assets/instagram.jpg",
      title: "Instagram",
      companyName: "Meta Platforms, Inc.",
      description: `Instagram is a widely popular social media platform that allows users to share photos, videos, and stories with followers across the globe. Designed for creativity and engagement, Instagram provides a variety of tools such as filters, AR effects, music, and editing options to enhance posts and stories. The platform’s algorithm curates content personalized to each user, enabling discovery of trending topics, new creators, and communities. Users can interact with content through likes, comments, shares, and direct messaging, fostering a strong social connection. Instagram Reels enables the creation and sharing of short, entertaining videos, while IGTV and live streaming allow long-form content and real-time interaction. Business and creator accounts benefit from analytics, insights, promotional tools, and shopping integration to reach audiences effectively. With its visually engaging interface, creative freedom, and focus on community building, Instagram has become a hub for entertainment, inspiration, and social interaction. It encourages expression, networking, and discovery, making it a key platform for individuals, influencers, and businesses globally. Its continuous updates and new features ensure users have a dynamic and engaging social media experience.`,
      size: 80,
      reviews: 150000000,
      ratingAvg: 4.5,
      downloads: 4000000000,
      ratings: [
        { name: "1 star", count: 180000 },
        { name: "2 star", count: 300000 },
        { name: "3 star", count: 600000 },
        { name: "4 star", count: 2200000 },
        { name: "5 star", count: 8500000 }
      ]
    },
    {
      id: 3,
      image: "/assets/tiktok.webp",
      title: "TikTok",
      companyName: "ByteDance Ltd.",
      description: `TikTok is a revolutionary short-form video platform that enables users to create, share, and explore videos across various genres, including entertainment, education, music, and lifestyle. The app features an intuitive video editor with filters, effects, music tracks, and AR capabilities, allowing users to produce engaging and creative content effortlessly. TikTok’s algorithm-driven feed delivers personalized content based on user behavior, making discovery of viral trends, challenges, and creators highly addictive. Users can interact with videos through likes, comments, shares, duets, and stitches, fostering collaboration and social engagement. TikTok also supports live streaming for real-time interaction with audiences. The platform emphasizes community, creativity, and cultural exchange, attracting creators of all skill levels globally. TikTok provides insights and analytics for creators to monitor engagement, audience growth, and trends, facilitating content strategy and influence. Its dynamic interface, innovative editing tools, and endless content library make it a must-have entertainment platform. From dance trends to informative tutorials, TikTok offers a diverse, engaging, and immersive experience for users, blending creativity with social connectivity in a modern digital landscape.`,
      size: 70,
      reviews: 120000000,
      ratingAvg: 4.5,
      downloads: 3000000000,
      ratings: [
        { name: "1 star", count: 300000 },
        { name: "2 star", count: 500000 },
        { name: "3 star", count: 900000 },
        { name: "4 star", count: 3500000 },
        { name: "5 star", count: 9000000 }
      ]
    },
    {
      id: 4,
      image: "/assets/youtube.png",
      title: "YouTube",
      companyName: "Google LLC",
      description: `YouTube is the largest video-sharing platform globally, allowing users to upload, view, and engage with video content of all types, including entertainment, tutorials, music, documentaries, and vlogs. Users can create channels, subscribe to creators, and receive personalized recommendations based on viewing habits. The platform supports high-definition video streaming, live broadcasts, playlists, and offline downloads for convenience. YouTube enables content creators to monetize videos through ads, memberships, and Super Chat. The comment section allows interaction between viewers and creators, while features like Shorts offer quick, engaging content in a vertical format. YouTube Studio provides creators with analytics, performance insights, and editing tools, facilitating professional growth and audience engagement. With billions of users worldwide, YouTube serves as an essential hub for learning, entertainment, and social engagement. Its intuitive interface, continuous content variety, and integration with Google services make it indispensable for both casual viewers and professional creators, fostering global connectivity through digital video experiences.`,
      size: 150,
      reviews: 120000000,
      ratingAvg: 4.7,
      downloads: 6000000000,
      ratings: [
        { name: "1 star", count: 250000 },
        { name: "2 star", count: 400000 },
        { name: "3 star", count: 900000 },
        { name: "4 star", count: 3500000 },
        { name: "5 star", count: 9500000 }
      ]
    },]);
  }, []);


  useEffect(() => {
    let result = apps.filter((app) =>
      app.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortOption === "name") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === "date") {
      result.sort((a, b) => new Date(b.installedAt) - new Date(a.installedAt));
    } else if (sortOption === "downloads") {
      result.sort((a, b) => b.downloads - a.downloads);
    }

    setFilteredApps(result);
  }, [apps, searchTerm, sortOption]);

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
            {filteredApps.length} Installed Apps
          </h2>

          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}

            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#632EE3]"
          >
            <option value="name">Sort by Name</option>
            <option value="date">Sort by Install Date</option>
            <option value="downloads">Sort by Downloads</option>
          </select>
        </div>




        <div className="flex flex-col divide-y divide-gray-200">

          {filteredApps.map((app) => (

            <InstalledAppCard key={app.id} app={app} />

          ))}
        </div>
      </div>
    </section>
  );
};

export default InstalledAppsPage;
