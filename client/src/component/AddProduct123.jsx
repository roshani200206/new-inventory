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

    const styles = {
    container: {
      maxWidth: "400px",
      margin: "40px auto",
      padding: "30px",
      background: "#f9f9f9",
      borderRadius: "12px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    },
    heading: {
      textAlign: "center",
      marginBottom: "24px",
      fontSize: "24px",
      color: "#333"
    },
    formGroup: {
      marginBottom: "16px",
      display: "flex",
      flexDirection: "column"
    },
    label: {
      marginBottom: "6px",
      fontWeight: "bold",
      color: "#555"
    },
    input: {
      padding: "10px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      fontSize: "16px"
    },
    select: {
      padding: "10px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      fontSize: "16px"
    },
    button: {
      padding: "12px",
      width: "100%",
      backgroundColor: "#007BFF",
      color: "#fff",
      fontSize: "16px",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      transition: "background-color 0.3s"
    },
    buttonHover: {
      backgroundColor: "#0056b3"
    }
  };

  return (
  <div style={styles.container}>
      <h2 style={styles.heading}>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Name:</label>
          <input
            style={styles.input}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Price:</label>
          <input
            style={styles.input}
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Stock:</label>
          <input
            style={styles.input}
            type="number"
            value={stock}
            onChange={(e) => setStock(Number(e.target.value))}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Category:</label>
          <select
            style={styles.select}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <div style={styles.formGroup}>
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct123;
