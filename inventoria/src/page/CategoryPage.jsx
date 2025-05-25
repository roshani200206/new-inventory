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
                const res = await fetch("https://fakestoreapi.com/category",

                )
                const data = await res.json()
                setCategory(data)
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