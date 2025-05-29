import React, { useState } from 'react'
import { useParams } from 'react-router'

function EditCategory() {
    const {cid} = useParams()
    console.log("category ko id",cid)
    const[name,setName]=useState("")

    function handleNameChange(e){
        console.log("value",e.target.value)
        setName(e.target.value)
    }

    async function handlesubmit(e){
        e.preventDefault()
 const payload = { name };

  try {
    const res = await fetch("http://localhost:3000/api/category/update/"+cid, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const errorData = await res.json();
      alert("Error: " + errorData.message);
      return;
    }

    const data = await res.json();
    
    alert("Category updated: " + data.data.name);
    setName(""); // Reset the form
  } catch (err) {
    console.error("Submit error:", err);
    alert("An unexpected error occurred.");
  }

        
        
    }
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
      <h2 style={styles.heading}>EditCategory </h2>


        <form onSubmit={handlesubmit}>
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
              <button
               type="submit"
               style={styles.button}
               onMouseOver={(e) =>e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
                onmouseout={(e) =>e.currentTarget.style.backgroundColor=styles.button.backgroundColor}
               > submit
               </button>
             </div>

        </form>
    </div>
  )
}

export default EditCategory