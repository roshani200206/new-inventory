//user name rw password 
import React, { useState } from 'react'

function LoginPage() {

    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")


    function handleUsernameChange(e){
        console.log("value",e.target.value)
        setUsername(e.target.value)
    }

     function handlePasswordChange(e){
        console.log("value",e.target.value)
        setPassword(e.target.value)
    }
      function handleSubmit(e){
        e.preventDefault()
        const payload = {
           name: username,
           pwd:password
        }
        console.log("form submitting",payload)
      }


  return (
    <div>LoginPage
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" value={username} onChange={handleUsernameChange} />

            <label>password</label>
            <input type="password" value={password} onChange={handlePasswordChange} />

            <button type ='submit'>Submit</button>
        </form>
    </div>
  )
}

export default LoginPage
