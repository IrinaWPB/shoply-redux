import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Buttons from './Buttons'
import './ProductList.css'

const ProductList = () => {
    //get all items form inventory
    const items = useSelector(store=>store.products)

    return (
        <div>
            <h1>Products</h1>
            {Object.keys(items.products).map(id => 
                <div key={id}>
                    <div className='ProductList-div'>
                        <Link to={`/products/${id}`}>
                            {items.products[id].name.toUpperCase()} <span>${items.products[id].price}</span>
                        </Link>    
                        <Buttons item={items.products[id]} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductList