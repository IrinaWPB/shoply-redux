import React from  'react'
import { Routes, Route } from 'react-router-dom'
import ProductList from './ProductList'
import NotFound from './NotFound';
import ProductDetails from './ProductDetails'
import Cart from './Cart'
import NavBar from './NavBar';
import './App.css'

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
