import React from 'react'
import { useParams } from 'react-router-dom'

const ProductItem = () => {
  const params = useParams()
  return (
    <div>ProductItem: {params.id}</div>
  )
}

export default ProductItem