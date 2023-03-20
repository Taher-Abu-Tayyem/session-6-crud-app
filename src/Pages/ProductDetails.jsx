import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
    let {productID}=useParams()
    useEffect(()=>{
        fetch(`http://localhost:3000/products/${productID}`)
            .then(res=>res.json())
            .then(product=>{
                setProduct(product)
            })
            
    },[]);

   
  return (
    <div>{product && <h1> {product.title}</h1>}</div>
  )
}

export default ProductDetails