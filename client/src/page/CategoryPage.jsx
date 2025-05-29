import React, { useEffect, useState } from 'react'
import CategoryDetails from '../component/CategoryDetails'
import AddCategory from '../component/AddCategory'
import { Link } from 'react-router'




function CategoryPage() 
 {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deletingId, setDeletingId] = useState(null); // Track deleting state

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch("http://localhost:3000/api/categories");
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);

        const data = await res.json();
        setCategories(data.data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchCategories();
  }, []);

  // Delete handler
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this category?")) return;

    setDeletingId(id);
    try {
      const res = await fetch(`http://localhost:3000/api/category/delete/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error(`Failed to delete (status ${res.status})`);

      // Remove deleted category from state
      setCategories((prev) => prev.filter((cat) => cat._id !== id));
    } catch (err) {
      alert(`Error deleting category: ${err.message}`);
    } finally {
      setDeletingId(null);
    }
  };

  if (loading) {
    return (
      <div style={styles.centered}>
        <p style={styles.loadingText}>Loading categories...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.centered}>
        <p style={styles.errorText}>Error: {error}</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Categories</h1>
        <a href="/AddCategory" style={styles.addButton}>
          + Add Category
        </a>
      </header>

      {categories.length === 0 ? (
        <p style={styles.noCategories}>No categories found.</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Category Name</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category._id} style={styles.tr}>
                <td style={styles.td}>{category.name}</td>
                <td style={styles.td}>
                  <a
                    href={`/EditCategory/${category._id}`}
                    style={{ ...styles.actionButton, ...styles.editButton }}
                    title={`Edit ${category.name}`}
                  >
                    Edit
                  </a>
                  <button
                    style={{ ...styles.actionButton, ...styles.deleteButton }}
                    onClick={() => handleDelete(category._id)}
                    disabled={deletingId === category._id}
                    title={`Delete ${category.name}`}
                  >
                    {deletingId === category._id ? "Deleting..." : "Delete"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 700,
    margin: "40px auto",
    padding: "0 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },
  title: {
    fontSize: "2.4rem",
    fontWeight: "700",
  },
  addButton: {
    padding: "10px 18px",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: 6,
    fontWeight: "600",
    fontSize: "1.1rem",
    textDecoration: "none",
    boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
    transition: "background-color 0.3s ease",
    cursor: "pointer",
  },
  noCategories: {
    textAlign: "center",
    color: "#777",
    fontStyle: "italic",
    fontSize: "1.2rem",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    borderRadius: 8,
    overflow: "hidden",
  },
  th: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "12px 15px",
    textAlign: "left",
    fontWeight: "600",
  },
  tr: {
    borderBottom: "1px solid #ddd",
    transition: "background-color 0.3s ease",
  },
  td: {
    padding: "12px 15px",
    color: "#555",
  },
  actionButton: {
    padding: "6px 12px",
    marginRight: 10,
    borderRadius: 4,
    fontWeight: "600",
    fontSize: "0.9rem",
    cursor: "pointer",
    border: "none",
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
    transition: "background-color 0.3s ease",
    color: "#fff",
  },
  editButton: {
    backgroundColor: "#28a745",
    textDecoration: "none",
    display: "inline-block",
  },
  deleteButton: {
    backgroundColor: "#dc3545",
  },
  centered: {
    height: "60vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: "1.3rem",
    color: "#555",
  },
  errorText: {
    fontSize: "1.3rem",
    fontWeight: "700",
    color: "crimson",
  },
};

export default CategoryPage;
