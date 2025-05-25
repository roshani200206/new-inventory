import React from 'react'

function Overview() {
  return (
    <>
      <style>
        {`
          .overview-container {
            display: flex;
          
            gap: 1.5rem;
            padding: 2rem;
            width: 100%;
          }

          .overview-box {
            background-color: #ffffff;
            padding: 1.5rem;
            border-radius: 12px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
            text-align: center;
            transition: transform 0.2s ease;
          }

          .overview-box:hover {
            transform: translateY(-5px);
          }

          .box-title {
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
            color: #2c3e50;
          }

          .box-value {
            font-size: 2rem;
            font-weight: bold;
            color: #27ae60;
          }
        `}
      </style>

      <div className="overview-container">
        <div className="overview-box">
          <div className="box-title">Products</div>
          <div className="box-value">120</div>
        </div>

        <div className="overview-box">
          <div className="box-title">Categories</div>
          <div className="box-value">12</div>
        </div>

        <div className="overview-box">
          <div className="box-title">Orders</div>
          <div className="box-value">87</div>
        </div>

        <div className="overview-box">
          <div className="box-title">Users</div>
          <div className="box-value">45</div>
        </div>
      </div>
    </>
  )
}

export default Overview
