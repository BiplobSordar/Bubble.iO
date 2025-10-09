import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import { Routes } from './Routes.jsx'
import { Bounce, ToastContainer } from 'react-toastify'
import { DataProvider } from './Context/DataContext.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>

    <DataProvider>
      <RouterProvider router={Routes} />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick={false}
        pauseOnHover={true}
        draggable={true}
        theme="colored"
        transition={Bounce}
        toastStyle={{
          background: "linear-gradient(90deg, #632EE3, #4a22b8)",
          color: "white",
          fontWeight: 500,
          borderRadius: "8px",
        }}
      />


    </DataProvider>



  </StrictMode>,
)