import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const RootLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />


            <main className="flex-1 max-w-[1600px] relative w-full mx-auto bg-[#F5F5F5]">
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}

export default RootLayout