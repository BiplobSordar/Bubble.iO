import React from 'react'
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom"; 
import RootLayout from './pages/RootLayout'
import Home from './pages/Home'
import AllAppsPage from './pages/AllApps';
import ErrorPage from './pages/ErrorPage';
import NotFound from './pages/NotFound';
import InstalledAppsPage from './pages/InstalledApps';
import ContactPage from './pages/Contact';
import AboutPage from './pages/About';
import SingleAppPage from './pages/SinglePage';




export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: '/home', element: <Home /> },
            { path: '/home', element: <Home /> },
            { path: '/apps/:id', element: <SingleAppPage/> },
            { path: '/apps', element: <AllAppsPage/> },
            { path: '/contact', element: <ContactPage/> },
            { path: '/about', element: <AboutPage/> },
            { path: '/installation', element: <InstalledAppsPage/> },
            { path: '/error', element: <ErrorPage/> },
            { path: '*', element: <NotFound/> },
           

        ]
    }
])