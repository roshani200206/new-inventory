import React, { useEffect, useState } from 'react'
import ProductDetails from '../component/ProductDetails'



function ProductPage() {

    const [products,setProducts]= useState([])


    function fun (data){
 return <ProductDetails product={data}/>
    }

    useEffect(
        ()=> {

       async function getAllProducts (){
        console.log("fucntion working")
            const res = await fetch("https://fakestoreapi.com/products",
                
            )
            const data = await res.json()
            // console.log("data fetched",data)
            setProducts(data)
        }
        console.log("outside fun")

        getAllProducts()

    },
    []
)
    console.log("above product")

    console.log("products",products)
  return (
    <div>ProductPage
        <div>

       {
           products.map(

        fun
        )
        }
        </div>
    </div>
  )
}

export default ProductPage