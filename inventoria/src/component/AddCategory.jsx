import React, { useState } from 'react'

function AddCategory() {
     const[name,setName]=useState("")

     function handleNameChange(e){
        console.log("value",e.target.value)
        setName(e.target.value)
     }

     function handlesubmit(e){
        e.preventDefault()

        const payload={

            name
        }
         console.log("form submitting",payload)
     }
  return (
    <div>AddCategory

        <form onSubmit={handlesubmit}>

            <label>Name:</label>
            <input type='text' value={name} onChange={handleNameChange}/>

            <button type='submit'>Submit</button>




        </form>
    </div>
  )
}

export default AddCategory