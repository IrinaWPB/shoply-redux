import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Buttons from './Buttons'
import './ProductDetails.css'

const ProductDetails = () => {
   //get id from parametrs
   const { id } = useParams()

   //find product in store using that id
   const product = useSelector(store => store.products.products[id])

   return (
     <div className='ProductDetails'>
        <h3>{product.name.toUpperCase()} ${product.price}</h3>
        <p>{product.description}</p>
        <img src={product.image_url} alt={product.name} width="300px"/>
        <Buttons item={product} />
     </div>
   )
}

export default ProductDetails