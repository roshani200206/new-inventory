import React from 'react';
import { Link } from 'react-router';
import { useCart } from '../context/orderItemContext';


function ProductDetails({ product }) {
  const { addToCart } = useCart();

  async function handleDelete() {
    try {
      const res = await fetch("http://localhost:3000/api/product/delete/" + product._id, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert("Error: " + errorData.message);
        return;
      }

      alert("Product deleted: " + product.name);
    } catch (err) {
      alert("An unexpected error occurred.");
    }
  }

  const handleAddToCart = () => {
    addToCart(product, 1); // ✅ add 1 quantity of this product
    alert(`${product.name} added to cart.`);
  };

  return (
    <div style={{ display: "flex", gap: "20px", marginBottom: "10px", alignItems: "center" }}>
      <div>{product.name}</div>
      <Link to={"/EditProduct/" + product._id}>Edit</Link>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleAddToCart}>Add to Cart</button> {/* ✅ New button */}
    </div>
  );
}

export default ProductDetails;
