
import { useState } from "react";
import { useCart } from "../context/orderItemContext";

const CartPage = () => {
  const { cartItems, removeFromCart, total, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Replace with your actual user ID from auth context/session
  const customerId = "REPLACE_WITH_LOGGED_IN_USER_ID";

  const handleSubmitOrder = async () => {
    if (!customerId) {
      setMessage("User not logged in.");
      return;
    }

    setLoading(true);
    setMessage("");

    const orderData = {
      total: total.toFixed(2),
     
      payment_type: "CASH", // or "CARD"
      status: "CONFIRMED",
      is_paid: true,
      products: cartItems.map(item => ({
        product: item.product._id,
        quantity: item.quantity
      }))
    };

    try {
      const response = await fetch("http://localhost:3000/api/order/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(orderData)
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Order placed successfully!");
        clearCart();
      } else {
        setMessage(result.message || "Failed to place order.");
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      setMessage("Server error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(({ product, quantity }) => (
            <div key={product._id} style={{ borderBottom: "1px solid #ccc", marginBottom: "10px", paddingBottom: "10px" }}>
              <h3 style={{ margin: 0 }}>{product.name}</h3>
              <p style={{ margin: "4px 0" }}>Price: ${product.price}</p>
              <p style={{ margin: "4px 0" }}>Quantity: {quantity}</p>
              <button onClick={() => removeFromCart(product._id)} style={{ color: "red", border: "none", background: "transparent", cursor: "pointer" }}>
                Remove
              </button>
            </div>
          ))}

          <p style={{ fontWeight: "bold" }}>Total: ${total.toFixed(2)}</p>

          <button
            onClick={handleSubmitOrder}
            disabled={loading}
            style={{
              marginTop: "10px",
              padding: "8px 16px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              cursor: "pointer"
            }}
          >
            {loading ? "Placing Order..." : "Place Order"}
          </button>

          {message && <p style={{ marginTop: "10px", color: message.includes("successfully") ? "green" : "red" }}>{message}</p>}
        </div>
      )}
    </div>
  );
};

export default CartPage;
