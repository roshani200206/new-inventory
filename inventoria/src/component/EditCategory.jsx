import React, { useState } from 'react'
import { useParams } from 'react-router'

function EditCategory() {
    const {cid} = useParams()
    console.log("category ko id",cid)
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
    <div>EditCategory


        <form onSubmit={handlesubmit}>
              

              <label>Name:</label>
              <input type='text' value={name} onChange={handleNameChange}/>


              <button type='submit'>Submit</button>


        </form>
    </div>
  )
}

export default EditCategory