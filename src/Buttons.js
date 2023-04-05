import React, { useState } from'react'
import { useSelector, useDispatch } from 'react-redux'
import { add_to_cart, delete_from_cart } from './actions'
import './Buttons.css';



const Buttons = ({item}) => {
    const itemsInCart = useSelector(store => store.cart.itemsInCart)
    const INITIAL_STATE = itemsInCart.indexOf(item) === -1
    const [disabled, setDisabled] = useState(INITIAL_STATE)
   
    const dispatch =  useDispatch()
    const add = (item) => {
        dispatch(add_to_cart(item))
        setDisabled(false)
    }
    const remove = (item) => {
        //check if item is in the cart
        const itemIndex = itemsInCart.indexOf(item)
        if (itemIndex === -1) {
           setDisabled(true)
        } else {
           dispatch(delete_from_cart(item, itemIndex)) 
        }
    }   
    return (
        <div className='Buttons'>
            <button onClick={()=>add(item)}>Add to Cart</button>
            <button onClick={()=>remove(item)} disabled={disabled}>Remove</button>
        </div>
        )
}

export default Buttons