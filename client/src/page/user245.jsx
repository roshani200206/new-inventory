import React, { useEffect, useState } from 'react'
import DemoDetail from '../component/Demo-detail'

function user245() {
  const [user,setusers]=useState([])
   function fun(data){
    return <DemoDetail user={data}/>
   }
    useEffect(
      ()=> {
         async function getAllProducts(){
          console.log("function working")
          const res=await fetch()
         }
      }
    )
  return (
    <div>user245</div>
  )
}

export default user245