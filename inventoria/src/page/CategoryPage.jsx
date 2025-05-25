import React, { useEffect, useState } from 'react'
import CategoryDetails from '../component/CategoryDetails'
import AddCategory from '../component/AddCategory'
import { Link } from 'react-router'

function CategoryPage() {

    const[category,setCategory]=useState([])

    function fun(data){
         
        return<CategoryDetails key={data._id} category={data}/>
    }

    useEffect(
        ()=>{

            async function getAllCategory() {
                console.log("function working")
              const res = await fetch("http://localhost:3000/api/categories", {
  method: "GET", // or "POST", "PUT", etc.
  headers: {
    "Content-Type": "application/json",
    // Add any authorization tokens if needed
    // "Authorization": "Bearer your_token_here"
  },
  // body: JSON.stringify(data) // only for POST/PUT
});
                if (!res.ok) {
  throw new Error(`HTTP error! status: ${res.status}`);
}
                const data = await res.json()
                console.log(data.data)
                setCategory(data.data)
            }

            console.log("outside fun")

            getAllCategory()
        },
        []

    )
      console.log("above category")
      console.log("category",category)
  return (
    <div>CategoryPage
      <Link to={"/AddCategory"}>Add Category</Link>

       
            {
                category.map(fun)
            }
        </div>
  
  )
}

export default CategoryPage