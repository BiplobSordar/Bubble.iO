import React, { useEffect, useState } from "react";


import { Link } from "react-router-dom";
import AppCard from "./AppCard";
import { trendingApps } from "../data/app_data";

const RandomAppsSection = () => {
    const [randomApps, setRandomApps] = useState([]);



    useEffect(() => {
        const selected = []

        const used = new Set()

 
        while (selected.length < 4) {

            const randomIndex = Math.floor(Math.random() * trendingApps.length)

            if (!used.has(randomIndex)) {

                selected.push(trendingApps[randomIndex])

                used.add(randomIndex)

            }
        }

        setRandomApps(selected)

    }, []);


    return (
        <section className="py-16 px-4 md:px-8 bg-gray-50">

            <div className="max-w-7xl mx-auto">

                <h2 className="text-2xl md:text-3xl font-bold text-[#001931] mb-8 text-center">
                    Recommended for You
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">

                    {randomApps.map((app) => (
                        
                        <Link key={app.id} to={`/apps/${app.id}`}>
                            <AppCard app={app} />
                        
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RandomAppsSection;
