import React, { useEffect, useState } from 'react'
import OrderDetails from '../component/OrderDetails'


function OrderPage() {
     const [order,setOrder]= useState([])

    

      

        function fun(data){

            return <OrderDetails key ={data._id} order={data}/>
        }
         useEffect(
            ()=> {

                async function getAllOrder() {
                    console.log("function working")
                    const res = await fetch("http://localhost:3000/api/order",{
                        method:"GET",
                        headers: {

                            "content-type":"application/json",
                        },
                    });

                    if (!res.ok) {
                         throw new Error('HTTP error! status: ${res.status}');
                    }
                     const data = await res.json()
                     console.log(data.data)
                     setOrder(data.data)
                    
                }
                  console.log("outside fun")
                  getAllOrder()
            },
            []
         )
          console.log("above order")

          console.log("order",order)
      
  return (
    <div>OrderPage
         
        <div>
            {
                order.map(fun)
            }
    </div>
    </div>
  )

}

export default OrderPage