import React, { useState, useEffect } from 'react';

function AddProduct123() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState(0);
  const [category, setCategory] = useState("");
  
  const [categories, setCategories] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    const payload = { name, price, stock, category };

    try {
      const res = await fetch("http://localhost:3000/api/product/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert("Error: " + errorData.message);
        return;
      }

      const data = await res.json();
      alert("Product created: " + data.data.name);
      setName("");
      setPrice("");
      setStock(0);
      setCategory("");
    } catch (err) {
      console.error("Submit error:", err);
      alert("An unexpected error occurred.");
    }
  }

  useEffect(() => {
    async function getAllCategory() {
      try {
        const res = await fetch("http://localhost:3000/api/categories");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setCategories(data.data);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    }

    getAllCategory();
  }, []);

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Price:</label>
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />

        <label>Stock:</label>
        <input type="number" value={stock} onChange={(e) => setStock(Number(e.target.value))} />

        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select a category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddProduct123;
