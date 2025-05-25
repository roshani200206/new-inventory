import React from 'react';
import { Link } from 'react-router';

function OrderDetails({ order, onDelete }) {


  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/order/delete/${order._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert("Error: " + errorData.message);
        return;
      }

      alert("Order deleted!");
      onDelete(order._id); // Notify parent to remove from UI
    } catch (err) {
      alert("An unexpected error occurred.");
      console.error(err);
    }
  };

  return (
    <div style={{ display: "flex", gap: "20px", marginBottom: "10px" }}>
      <span>{order._id}</span>
      <Link  to={"/order/view/"+order._id}>View</Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default OrderDetails;
