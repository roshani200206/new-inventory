import { useState } from "react";
import { useCart } from "../context/orderItemContext";
import { useAuth } from "../context/AuthContext";

const CartPage = () => {
  const { cartItems, removeFromCart, total, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { user } = useAuth();

  const [paymentType, setPaymentType] = useState("CASH");
  const [status, setStatus] = useState("PENDING");
  const [isPaid, setIsPaid] = useState(false);

  const handleSubmitOrder = async () => {
    if (cartItems.length === 0) {
      setMessage("Your cart is empty.");
      return;
    }

    setLoading(true);
    setMessage("");

    const orderData = {
      total: total.toFixed(2),
      customer: user._id,
      payment_type: paymentType,
      status: status,
      is_paid: isPaid,
      products: cartItems.map((item) => ({
        product: item.product._id,
        quantity: item.quantity,
      })),
    };

    try {
      const response = await fetch("http://localhost:3000/api/order/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Order placed successfully!");
        clearCart();
        setPaymentType("CASH");
        setStatus("PENDING");
        setIsPaid(false);
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
    <div
      style={{
        maxWidth: 600,
        margin: "30px auto",
        padding: "20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          fontSize: "26px",
          fontWeight: "700",
          marginBottom: "20px",
          color: "#333",
          textAlign: "center",
        }}
      >
        Your Cart
      </h2>

      {cartItems.length === 0 ? (
        <p
          style={{
            fontSize: "18px",
            textAlign: "center",
            color: "#777",
            margin: "40px 0",
          }}
        >
          Your cart is empty.
        </p>
      ) : (
        <>
          <div
            style={{
              maxHeight: "300px",
              overflowY: "auto",
              marginBottom: "20px",
              border: "1px solid #ddd",
              borderRadius: "6px",
              backgroundColor: "#fff",
              padding: "15px",
            }}
          >
            {cartItems.map(({ product, quantity }) => (
              <div
                key={product._id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid #eee",
                  padding: "12px 0",
                }}
              >
                <div>
                  <h4 style={{ margin: "0 0 6px 0", color: "#222" }}>
                    {product.name}
                  </h4>
                  <p style={{ margin: "2px 0", color: "#555" }}>
                    Price: ${product.price.toFixed(2)}
                  </p>
                  <p style={{ margin: "2px 0", color: "#555" }}>
                    Quantity: {quantity}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(product._id)}
                  style={{
                    backgroundColor: "#ff4d4f",
                    border: "none",
                    color: "#fff",
                    padding: "6px 12px",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontWeight: "600",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#d9363e")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#ff4d4f")
                  }
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <p
            style={{
              fontWeight: "700",
              fontSize: "20px",
              textAlign: "right",
              marginBottom: "30px",
              color: "#222",
            }}
          >
            Total: ${total.toFixed(2)}
          </p>

          {/* Payment Type */}
          <div
            style={{
              marginBottom: "25px",
              backgroundColor: "#fff",
              padding: "15px",
              borderRadius: "6px",
              boxShadow: "inset 0 0 5px #ddd",
            }}
          >
            <h3
              style={{
                marginBottom: "12px",
                color: "#444",
                fontWeight: "600",
              }}
            >
              Payment Type
            </h3>
            <label
              style={{
                marginRight: "25px",
                fontSize: "16px",
                cursor: "pointer",
                userSelect: "none",
                color: paymentType === "CASH" ? "#007bff" : "#555",
                fontWeight: paymentType === "CASH" ? "700" : "400",
              }}
            >
              <input
                type="radio"
                name="paymentType"
                value="CASH"
                checked={paymentType === "CASH"}
                onChange={(e) => setPaymentType(e.target.value)}
                style={{ marginRight: "8px" }}
              />
              Cash
            </label>
            <label
              style={{
                fontSize: "16px",
                cursor: "pointer",
                userSelect: "none",
                color: paymentType === "CARD" ? "#007bff" : "#555",
                fontWeight: paymentType === "CARD" ? "700" : "400",
              }}
            >
              <input
                type="radio"
                name="paymentType"
                value="CARD"
                checked={paymentType === "CARD"}
                onChange={(e) => setPaymentType(e.target.value)}
                style={{ marginRight: "8px" }}
              />
              Card
            </label>
          </div>

          {/* Status */}
          <div
            style={{
              marginBottom: "25px",
              backgroundColor: "#fff",
              padding: "15px",
              borderRadius: "6px",
              boxShadow: "inset 0 0 5px #ddd",
            }}
          >
            <h3
              style={{
                marginBottom: "12px",
                color: "#444",
                fontWeight: "600",
              }}
            >
              Order Status
            </h3>
            {["PENDING", "CANCELLED", "CONFIRMED"].map((val) => (
              <label
                key={val}
                style={{
                  marginRight: "25px",
                  fontSize: "16px",
                  cursor: "pointer",
                  userSelect: "none",
                  color: status === val ? "#007bff" : "#555",
                  fontWeight: status === val ? "700" : "400",
                }}
              >
                <input
                  type="radio"
                  name="status"
                  value={val}
                  checked={status === val}
                  onChange={(e) => setStatus(e.target.value)}
                  style={{ marginRight: "8px" }}
                />
                {val.charAt(0) + val.slice(1).toLowerCase()}
              </label>
            ))}
          </div>

          {/* Is Paid */}
          <div
            style={{
              backgroundColor: "#fff",
              padding: "15px",
              borderRadius: "6px",
              boxShadow: "inset 0 0 5px #ddd",
              marginBottom: "30px",
            }}
          >
            <label
              style={{
                fontSize: "16px",
                cursor: "pointer",
                userSelect: "none",
                color: "#555",
                fontWeight: "500",
              }}
            >
              <input
                type="checkbox"
                checked={isPaid}
                onChange={(e) => setIsPaid(e.target.checked)}
                style={{ marginRight: "10px" }}
              />
              Is Paid
            </label>
          </div>

          <button
            onClick={handleSubmitOrder}
            disabled={loading}
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: loading ? "#6c757d" : "#007bff",
              color: "#fff",
              fontWeight: "700",
              fontSize: "18px",
              border: "none",
              borderRadius: "8px",
              cursor: loading ? "not-allowed" : "pointer",
              boxShadow: "0 4px 8px rgba(0, 123, 255, 0.4)",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              !loading && (e.currentTarget.style.backgroundColor = "#0056b3")
            }
            onMouseLeave={(e) =>
              !loading && (e.currentTarget.style.backgroundColor = "#007bff")
            }
          >
            {loading ? "Placing Order..." : "Place Order"}
          </button>

          {message && (
            <p
              style={{
                marginTop: "20px",
                color: message.includes("successfully") ? "green" : "red",
                fontWeight: "600",
                textAlign: "center",
                fontSize: "16px",
              }}
            >
              {message}
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default CartPage;
