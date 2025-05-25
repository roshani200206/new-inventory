import React, { useState } from 'react'

function AddProduct123() {

     const[name,setName]=useState("")
     const[price,setPrice]=useState("")
     const[stock,setStock]=useState("")
     const[category,setCategory]=useState("")

     function handleNameChange(e){
        console.log("value",e.target.value)
        setName(e.target.value)
     }

     function handlePriceChange(e){
        console.log("value",e.target.value)
        setPrice(e.target.value)
     }

     function handleStockChange(e){
        console.log("value",e.target.value)
        setStock(e.target.value)
     }

     function handleCategoryChange(e){
        console.log("value",e.target.value)
        setCategory(e.target.value)
     }

     function handlesubmit(e){
        e.preventDefault()

        const payload={
            name ,
            price,
            stock,
            category
        }

        console.log("form submitting",payload)
     }
  return (
    <div>AddProduct123

        <form onSubmit={handlesubmit}>

            <label>Name:</label>
            <input type='=text' value={name} onChange={handleNameChange}/>

            <label>Price:</label>
            <input type='text' value={price} onChange={handlePriceChange}/>

            <label>Stock:</label>
            <input type='text' value={stock} onChange={handleStockChange}/>

            <label>Category:</label>
            <input type='text' value={category} onChange={handleCategoryChange}/>

            <button type='submit'>Submit</button>


        </form>
    </div>
  )
}

export default AddProduct123