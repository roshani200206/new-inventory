import React from 'react'

function ProductDetails({product}) {
  console.log(product)
  return (
    <div>{product.title}</div>
  )
}

export default ProductDetails