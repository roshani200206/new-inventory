import React, { useState } from 'react'

function SignupPage() {
    const [username,setUsername]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
     
     function handleUsernameChange(e){
        console.log("value",e.target.value)
        setUsername(e.target.value)
     }
     function handleemailChange(e){
        console.log("value",e.target.value)
        setemail(e.target.value)
     }
      function handlePasswordChange(e){
        console.log("value",e.target.value)
        setpassword(e.target.value)
      }
  
    function handleSubmit(e){
        e.preventDefault()
        const payload={
            name:username,
            email:email,
            pwd:password
        }
        console.log("form submitting",payload)
    }

  return (
    <div>signupPage

        <form onSubmit={handleSubmit}>

            <label>User name</label>
            <input type="text" value={username} onChange={handleUsernameChange}/>

            <label > email</label>
            <input type="text" value={email} onChange={handleemailChange} />


            <label > password</label>
            <input type="password" value={password} onChange={handlePasswordChange}/>

            <button  type='submit'>submit</button>
        </form>
    </div>
  )
}

export default SignupPage