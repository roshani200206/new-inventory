import React, { useEffect, useState } from 'react';
import OrderDetails from '../component/OrderDetails';

function OrderPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function getAllOrders() {
      try {
        const res = await fetch("http://localhost:3000/api/order", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setOrders(data.data);
      } catch (err) {
        console.error(err);
        alert("Failed to fetch orders.");
      }
    }

    getAllOrders();
  }, []);

  const handleDelete = (idToRemove) => {
    setOrders(prev => prev.filter(order => order._id !== idToRemove));
  };

  return (
    <div>
      <h2>Order Page</h2>
      <div>
        {orders.map((order) => (
          <OrderDetails key={order._id} order={order} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default OrderPage;
