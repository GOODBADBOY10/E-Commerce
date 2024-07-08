import { useState } from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/navbar/Navbar'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
import Footer from './components/Footer/Footer';
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kid_banner from './components/Assets/banner_kids.png'

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory category='men' banner={men_banner} />} />
          <Route path='/womens' element={<ShopCategory category='women' banner={women_banner} />} category='womens' />
          <Route path='/kids' element={<ShopCategory category='kid' banner={kid_banner} />} category='kids' />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
