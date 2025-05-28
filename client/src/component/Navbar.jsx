import React from 'react'
import { Link } from 'react-router'
import { useAuth } from '../context/AuthContext'

const nav = {
  color:"white"

}

const btn={
  backgroundColor:"red",
  color:"white",
  fontSize:"10px",
  borderRadius:"30px",
  padding:"10px 20px"
}

function Navbar() {
  const {logout} =useAuth()

  

  return (
    <div style={
      {
        display:"flex",
        gap:"20px",
        alignItems:'center',
        justifyContent:"space-between"
    }
    }>
      
      <div style={{
         display:"flex",
        gap:"20px",
        alignItems:'center',
      }}>

        <Link style={nav} to ="/">overview</Link>
        <Link style={nav} to="/CategoryPage">Category</Link>
        <Link  style={nav} to ="/product-page">Products</Link>
        <Link style={nav} to={"/cartPage"}>Cartpage</Link>
        <Link style={nav} to="/OrderPage">Order</Link>
      
      </div>

        <div>
          

        <button style={
btn
        } onClick={logout}>Logout</button>
        </div>
          
    </div>
  )
}

export default Navbar 