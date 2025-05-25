import React from 'react'

function CategoryDetails({category}) {
    console.log(category)
  return (
    <div>{category.name}</div>
  )
}

export default CategoryDetails