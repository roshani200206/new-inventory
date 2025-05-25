import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function EditProduct() {
const {pid} =useParams()
    const[name,setName]=useState("")
    const[price,setPrice]=useState("")
    const[stock,setStock]=useState(0)
    const[category,setCategory]=useState("")

      const [categories, setCategories] = useState([]);

    function handleNameChange(e){
        console.log("value",e.target.value)
        setName(e.target.value)
    }

    function handlePriceChange(e){
        console.log("value",e.target.value)
        setPrice(e.target.value)
    }

    function handleStockChange(e){
        console.log("value",e.target.value)
        setStock(e.target.value)
    }

    function handleCategoryChange(e){
        console.log("value",e.target.value)
        setCategory(e.target.value)
    }

    async function handlesubmit(e){
        e.preventDefault()

         const payload={
         name,
        price,
        stock,
        category }

        try {
    const res = await fetch("http://localhost:3000/api/product/update"+pid, {
      method: "POST",
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
    alert("product created: " + data.data.name);
    setName(""); 
    setCategory("")
    setPrice("")
    setStock(0)
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
    <div>EditProduct


             <form onSubmit={handlesubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange} />

        <label>Price:</label>
        <input type="text" value={price} onChange={handlePriceChange} />

        <label>Stock:</label>
        <input type="number" value={stock} onChange={handleStockChange} />

        <label>Category:</label>
        <select value={category} onChange={handleCategoryChange}>
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
  )
}

export default EditProduct