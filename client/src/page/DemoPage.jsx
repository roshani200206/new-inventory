import React, { useEffect, useState } from 'react'
import ProductDetails from '../component/ProductDetails'
import DemoDetail from '../component/Demo-detail'

function DemoPage() {
     const [user,setusers]=useState([])

     function fun(data){
        return <DemoDetail user={data}/>
     }
      useEffect(
        ()=> {
            async function getAllProducts(){
                console.log("function working")
                const res=await fetch("https://fakestoreapi.com/users")
                const data=await res.json()
                setusers(data)
            }
            console.log("outside fun")
            getAllProducts()
        },
        []
      )
      console.log("above product")
      console.log("user",user)

    // use this for fetching https://fakestoreapi.com/users
  return (
    <div>
        <div>
            {
                user.map(
                    fun
                )
            }
        </div>
    </div>
  )
}

export default DemoPage