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
  return (
    <div>EditCategory


        <form onSubmit={handlesubmit}>
              

              <label>Name:</label>
              <input type='text' value={name} onChange={handleNameChange}/>


              <button type='submit'>Submit</button>


        </form>
    </div>
  )
}

export default EditCategory