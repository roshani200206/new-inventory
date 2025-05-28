import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function OrderViewPage() {
  const { oid } = useParams(); 
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    async function fetchOrder() {
      try {
        const res = await fetch(`http://localhost:3000/api/order/${oid}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch order.");
        }

        const data = await res.json();
        setOrder(data.data); // Adjust if your response structure differs
      } catch (err) {
        console.error(err);
        alert("Error fetching order.");
      } finally {
        setLoading(false);
      }
    }

    fetchOrder();
  }, [oid]);

  
  if (loading) return <p>Loading...</p>;
  if (!order) return <p>Order not found.</p>;

  return (
    <div>
      <h2>Order Details</h2>
      <p><strong>Order ID:</strong> {order._id}</p>
      <p><strong>Total:</strong> ${order.total}</p>
      <p><strong>Payment Type:</strong> {order.payment_type}</p>
      <p><strong>Status:</strong> {order.status}</p>
      <p><strong>Paid:</strong> {order.is_paid ? "Yes" : "No"}</p>
      <p><strong>Customer:</strong>{order?.customer?.email} ({order?.customer?.username})</p>

      <h3>Products:</h3>
      {order.products.map((item, index) => (
        <div key={index} style={{ marginLeft: "20px", marginBottom: "10px" }}>
          <p><strong>Product:</strong> {item.product?.name}</p>
          <p><strong>Quantity:</strong> {item.quantity}</p>
        </div>
      ))}
    </div>
  );
}

export default OrderViewPage;
