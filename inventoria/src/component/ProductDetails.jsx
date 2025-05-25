import React from 'react'
import { Link } from 'react-router';

function ProductDetails({product}) {
  console.log(product)

   async function handleDelete()
    {
       console.log(product._id)

     try{
      const res = await fetch("https://localhost:3000/api/product/delete/"+product._id,{

        method:"DELETE",
        headers:{
           "content-type":"application/json",

        },
      });
        
       if(!res.ok){
         const errorData = await res.json();
         alert("Error:"+ errorData.message);
         return;
       }

        alert("product deleted: " +product.name);
     }  
      catch(err) {
         alert("an unexpected error occured.");
      }
    
   }
  return (
    <div>
        <div style={{
          display:"flex",
          gap:"20px"
        }}>     
      
      {product.name}
      <Link to={"/EditProduct/"+product._id}>Edit </Link>
      <button onClick={handleDelete}>delete</button>
    </div>      
    </div>
  )
}

export default ProductDetails