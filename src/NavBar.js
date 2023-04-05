import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './NavBar.css'


const NavBar = () => {
    const count = useSelector(store => store.cart.itemsCount)
    return (
        <div className='NavBar'>
            <div className='NavBar-main'>
                <Link to='/'>Products</Link>
            </div>
            <div className='NavBar-cart'>
                <Link to={'/cart'}>Cart {count}</Link>
            </div>
        </div>
    )
}

export default NavBar