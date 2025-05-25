import React, { useEffect, useState } from 'react'
import ProductDetails from '../component/ProductDetails'

function product123() {
    const [products,setProducts]= useState([])

    useEffect(()=>{
        async function getAllProducts (){
            console.log("function working")
              const res = await fetch("https://fakestoreapi.com/products")
              const data = await res.json()
              setProducts(data)
              {
                console.log("outside fun")

                getAllProducts()

              },[])
       console.log("above product")
       console.log("products",products)
  return (
    <div>product123
    {
        products.map((data,index))
        </div>
    )
  
}

export default product123