import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <div style={{
        display:"flex",
        gap:"20px"
    }}>
        <Link to ="/product-page">Products</Link>

        <Link to="/CategoryPage">Category</Link>

    </div>
  )
}

export default Navbar 