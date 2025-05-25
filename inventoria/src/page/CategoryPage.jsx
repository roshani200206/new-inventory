import React, { useEffect, useState } from 'react'
import CategoryDetails from '../component/CategoryDetails'

function CategoryPage() {

    const[category,setCategory]=useState([])

    function fun(data){
         
        return<CategoryDetails category={data}/>
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
        <div>
            {
                category.map(fun)
            }
        </div>
    </div>
  )
}

export default CategoryPage