import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <div style={{
        display:"flex",
        gap:"20px"
    }}>
        <Link to ="/">overview</Link>
        <Link to ="/product-page">Products</Link>
        <Link to={"/cartPage"}>Cartpage</Link>

        <Link to="/CategoryPage">Category</Link>
          <Link to="/OrderPage">Order</Link>

    </div>
  )
}

export default Navbar 