import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <div style={{
        display:"flex",
        gap:"40px",
        border:"1px solid black"
    }}>
        <Link to={"/demo"}>
        Multiply
        </Link>
        <Link to={"/add"} >
        Add</Link>
    </div>
  )
}

export default Navbar