import React from 'react'
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom"; 
import RootLayout from './pages/RootLayout'
import Home from './pages/Home'




export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: '/home', element: <Home /> },
            { path: '/home', element: <Home /> },
        
           

        ]
    }
])