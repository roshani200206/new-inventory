import React from 'react'
import { Link } from 'react-router'
function PractiseNav() {
  return (
    <div>
        <Link to={"/test"}>
        multiply
        </Link>
        <Link to={"/add"}>
        Add
        </Link>
    </div>
  )
}

export default PractiseNav