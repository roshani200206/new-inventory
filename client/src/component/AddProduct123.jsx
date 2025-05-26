import React, { useState, useEffect } from 'react';

function AddProduct123() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState(0);
  const [category, setCategory] = useState("");
  
  const [categories, setCategories] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    const payload = { name, price:Number(price), stock, category };

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
      console.log(data)
      alert("Product created: " + data.data.name);
      setName("");
      setPrice("");
      setStock(0);
      setCategory("");
    } catch (err) {
      console.error("Submit error:", err);
    
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
         <div style={{ marginBottom: "12px" }}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
         </div>


          <div style={{ marginBottom: "12px" }}>
        <label>Price:</label>
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
         </div>

         <div style={{ marginBottom: "12px" }}>
        <label>Stock:</label>
        <input type="number" value={stock} onChange={(e) => setStock(Number(e.target.value))} />
         </div>


         <div style={{ marginBottom: "12px" }}>
        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select a category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>
        </div>



       <div style={{ marginBottom: "12px" }}>
        <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct123;
