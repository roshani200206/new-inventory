import React, { useEffect, useState } from 'react'
import ProductDetails from '../component/ProductDetails'
import { Link } from 'react-router'
import { Button } from '@mui/material'



function ProductPage() {

    const [products,setProducts]= useState([])


    function fun (data){
       return <ProductDetails key={data._id} product={data}/>
    }

    useEffect(
        ()=> {

       async function getAllProducts (){
        console.log("fucntion working")
            const res = await fetch("http://localhost:3000/api/product",{
            method: "GET",
            headers: {

                "content-type": "application/json",
            },

            }
                
            );
              if (!res.ok) {
                throw new Error('HTTP error! status: ${res.status}');
              }
            const data = await res.json()
             console.log(data.data)
            setProducts(data.data)
        }
        console.log("outside fun")

        getAllProducts()

    },
    []
)
    console.log("above product")

    console.log("products",products)
  return (
    <div>
<Button variant='contained'>

      <Link to="/AddProduct123">Add Product</Link>
</Button>

        <div style={{
          display:"flex",
          gap:"10px",
          flexWrap:"wrap"
        }}>
          

       {
           products.map(fun)
           
        }
        </div>
    </div>
  )
}

export default ProductPage