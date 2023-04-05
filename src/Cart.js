import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add_to_cart, delete_from_cart } from './actions'
import './Cart.css'


const Cart = () => {
    const dispatch = useDispatch()
    const items = useSelector(store => store.cart.itemsInCart)
    let total = 0;
        for (let item of items) {
            total = total + item.price
        }
    let obj = {}
    for (let item of items) {
        console.log(item)
        obj[item.name] = obj[item.name] ? obj[item.name] + 1 : 1
    }

    const getByName = (name) => {
        let item = items.filter(i=> i.name === name) 
        return item[0]
    }
    const addItem = (name) => {
        let item = getByName(name)
        dispatch(add_to_cart(item))
    }
    const removeItem = (name) => {
        let item = getByName(name)
        const itemIndex = items.indexOf(item)
        if (itemIndex === -1) {
        } else {
           dispatch(delete_from_cart(item, itemIndex)) 
        }
    }

    


    return (
        <div className='Cart'>
            <h1>My cart</h1>
            <h3>Added Items:</h3>
            <hr />
            {!(items.length === 0) ?
            <div className='Cart-info'>
                <ol>
                {Object.keys(obj).sort().map(itemName=> (
                    <li>
                        <h4>
                            {itemName.toUpperCase()} : {obj[itemName]}
                            <span>
                                {obj[itemName]} X ${getByName(itemName).price} {' '}
                                <span>${obj[itemName] * getByName(itemName).price}</span>
                            </span>
                            
                        </h4>
                        
                      
                        <div>
                            <button onClick={() => addItem(itemName)}> + </button>
                            <button onClick={() => removeItem(itemName)}> - </button>
                        </div>
                    </li>
                ))}  
                </ol> 
                <hr />
                <div className='Total'>Total: ${total}</div>
            </div> :
            <h4>You don't have any items in your cart</h4> }
        </div>
    )
}

export default Cart