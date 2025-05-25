import React from 'react'
import { Link } from 'react-router'
import { useAuth } from '../context/AuthContext'

function Navbar() {
  const {logout} =useAuth()
  return (
    <div style={{
        display:"flex",
        gap:"20px"
    }}>
        <Link to ="/">overview</Link>
        <Link to="/CategoryPage">Category</Link>
        <Link to ="/product-page">Products</Link>
        <Link to={"/cartPage"}>Cartpage</Link>
        <Link to="/OrderPage">Order</Link>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Navbar 