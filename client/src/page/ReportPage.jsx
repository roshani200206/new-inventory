import React, { useEffect, useState } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';

function ReportPage() {
  const [orders, setOrders] = useState([]);
  const [dashboardData, setDashboardData] = useState({});
  const [products, setProducts] = useState([]);  

  // Fetch orders
  useEffect(() => {
    async function getAllOrders() {
      try {
        const res = await fetch("http://localhost:3000/api/order");
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setOrders(data.data);
      } catch (err) {
        console.error(err);
        alert("Failed to fetch orders.");
      }
    }
    getAllOrders();
  }, []);

  useEffect(() => {
    async function fetchDashboardData() {
      try {
        const res = await fetch("http://localhost:3000/api/dashboard");
        if (!res.ok) throw new Error("Failed to fetch dashboard data");
        const result = await res.json();
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

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("http://localhost:3000/api/product");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data.data); 
      } catch (err) {
        console.error(err);
      }
    }
    fetchProducts();
  }, []);


  const productIdToName = {};
  products.forEach((p) => {
    productIdToName[p._id] = p.name; 
  });

 
  const statusCounts = orders.reduce((acc, order) => {
    acc[order.status] = (acc[order.status] || 0) + 1;
    return acc;
  }, {});
  const pieChartData = Object.entries(statusCounts).map(([status, count], index) => ({
    id: index,
    value: count,
    label: status,
  }));


  const productSalesMap = {};
  orders.forEach(order => {
    order.products.forEach(({ product, quantity }) => {
      productSalesMap[product] = (productSalesMap[product] || 0) + quantity;
    });
  });

  const barChartData = Object.entries(productSalesMap).map(([productId, totalSold]) => ({
    name: productIdToName[productId] || productId.slice(0, 6),
    totalSold,
  })).sort((a, b) => b.totalSold - a.totalSold);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Order Status Report</h1>

      <h2 className="text-xl font-semibold mb-2">Orders by Status (Pie Chart)</h2>
      <PieChart series={[{ data: pieChartData }]} width={500} height={300} />

      <h2 className="text-xl font-bold mb-4 mt-8">Top Sold Products</h2>
      <BarChart
      colors={["red"]}
        xAxis={[{ scaleType: 'band', data: barChartData.map(p => p.name) }]}
        series={[{ data: barChartData.map(p => p.totalSold), label: 'Units Sold' }]}
        width={800}
        height={400}
      />
    </div>
  );
}

export default ReportPage;
