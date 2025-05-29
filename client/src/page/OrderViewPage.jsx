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

        if (!res.ok) throw new Error("Failed to fetch order.");
        const data = await res.json();
        setOrder(data.data);
      } catch (err) {
        console.error(err);
        alert("Error fetching order.");
      } finally {
        setLoading(false);
      }
    }

    fetchOrder();
  }, [oid]);

  if (loading) return <p style={styles.loading}>Loading...</p>;
  if (!order) return <p style={styles.error}>Order not found.</p>;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Order Details</h2>
        <div style={styles.section}>
          <p><strong>Order ID:</strong> {order._id}</p>
          <p><strong>Total:</strong> ${order.total}</p>
          <p><strong>Payment Type:</strong> {order.payment_type}</p>
          <p><strong>Status:</strong> {order.status}</p>
          <p><strong>Paid:</strong> {order.is_paid ? "Yes" : "No"}</p>
          <p><strong>Customer:</strong> {order?.customer?.email} ({order?.customer?.username})</p>
        </div>

        <h3 style={styles.subheading}>Products</h3>
        <div style={styles.productsList}>
          {order.products.map((item, index) => (
            <div key={index} style={styles.productItem}>
              <p><strong>Product:</strong> {item.product?.name}</p>
              <p><strong>Quantity:</strong> {item.quantity}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px 20px',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
  },
  card: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    maxWidth: '600px',
    width: '100%',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    borderBottom: '2px solid #eee',
    paddingBottom: '10px',
  },
  subheading: {
    fontSize: '20px',
    marginTop: '30px',
    marginBottom: '10px',
  },
  section: {
    lineHeight: '1.8',
    fontSize: '16px',
  },
  productsList: {
    paddingLeft: '10px',
  },
  productItem: {
    marginBottom: '15px',
    padding: '10px',
    backgroundColor: '#f2f2f2',
    borderRadius: '6px',
  },
  loading: {
    fontSize: '18px',
    textAlign: 'center',
    marginTop: '100px',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: '100px',
  },
};

export default OrderViewPage;
