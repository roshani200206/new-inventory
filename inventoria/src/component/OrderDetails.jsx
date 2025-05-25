import React from 'react'
import { Link } from 'react-router';

function OrderDetails(order) {
  console.log(order)

   async function handleView() 
   {
    console.log(order._id)

    try{
        const res = await fetch("http://localhost:3000/api/order/view/"+order._id,{
          method:"VIEW",
          headers:{

            "content-type":"application/json",
          },
        });
        if(!res.ok){
           const errorData = await res.json();
           alert("Error:"+errorData.message);
           return;
        }
         alert("order view: " +order.name);
    }
      catch(err) {
         alert("an unexpected error occurred.");

      }
    
   }
  return (
    <div>
       <div style={{
          display:"flex",
          gap:"20px"

       }}>
        {order.name}
         <button onClick={handleView}>view</button>
       </div>
       </div>
  )
}

export default OrderDetails