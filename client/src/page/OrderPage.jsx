import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  IconButton
} from '@mui/material';


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
    <div style={{ padding: "24px" }}>
      <Typography variant="h4" gutterBottom>
        Orders
      </Typography>

      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
            <TableRow>
              <TableCell><strong>Order ID</strong></TableCell>
              <TableCell><strong>Total</strong></TableCell>
              <TableCell><strong>Payment Type</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
              <TableCell><strong>Is Paid</strong></TableCell>

              <TableCell align="center"><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {orders.map((order) => (
              <TableRow key={order._id}>
                <TableCell>{order._id}</TableCell>
                <TableCell>${order.total}</TableCell>
                <TableCell>{order.payment_type}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>{order.is_paid ? "Yes" : "No"}</TableCell>
              
                <TableCell align="center">
                  <IconButton onClick={() => handleDelete(order._id)} color="error">
                    Delete
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>
    </div>
  );
}

export default OrderPage;
