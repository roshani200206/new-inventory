import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
           
          }

          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f9f9f9;
            color: #333;
          }

          .layout-container {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
                        width: 100%;

          }

          .navbar {
            background-color: #2c3e50;
            color: #fff;
            padding: 1rem;
          }

          .main-content {
           width: 100%;
            flex: 1;
            padding: 2rem;
            background-color: #fff;
          }
        `}
      </style>

      <div className="layout-container">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout
