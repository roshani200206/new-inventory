import React, { useState } from 'react'

 function Add() {
    const[count,setcount]=useState(0)
    function handleAddition(){
        setcount(count+1)
    }
  return (
    <>
      <h1>inventory</h1>
      {count}
       <button onClick={handleAddition}>+</button>
       </>
   
  )
}
export default Add;
