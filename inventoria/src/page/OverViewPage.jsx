import React, { useEffect, useState } from "react";

function Overview() {
  const [dashboardData, setDashboardData] = useState({
    product: 0,
    categories: 0,
    orders: 0,
    totalRevenue: 0,
  });

  useEffect(() => {
    async function fetchDashboardData() {
      try {
        const res = await fetch("http://localhost:3000/api/dashboard");
        if (!res.ok) throw new Error("Failed to fetch dashboard data");
        const result = await res.json();
        console.log("result",result)
        setDashboardData({
          product: result.data.product,
          categories: result.data.categories,
          orders: result.data.orders,
          totalRevenue: result.data.totalRevenue,
        });
      } catch (err) {
        console.error(err);
        
      }
    }

    fetchDashboardData();
  }, []);

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
          <div className="box-value">{dashboardData.product}</div>
        </div>

        <div className="overview-box">
          <div className="box-title">Categories</div>
          <div className="box-value">{dashboardData.categories}</div>
        </div>

        <div className="overview-box">
          <div className="box-title">Orders</div>
          <div className="box-value">{dashboardData.orders}</div>
        </div>

        <div className="overview-box">
          <div className="box-title">Total Revenue</div>
          <div className="box-value">${dashboardData.totalRevenue.toFixed(2)}</div>
        </div>
      </div>
    </>
  );
}

export default Overview;
