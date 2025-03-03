

import { Route, Routes } from 'react-router'
import './App.css'
import CartProvider from './Components/CartProvider'
import Navbar from './Components/Navbar'
import Ecommerce from './Components/ECommerce'
import Cart from './Components/Cart'
import About from './Components/About'
import ContactUs from './Components/ContactUs'
import "bootstrap/dist/css/bootstrap.min.css";
import Checkout from './Components/Checkout'





function App() {
 

  return (
    <>
    
    <CartProvider>
        <Navbar />
        
        <Routes>
        <Route path="/" element={<Ecommerce />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
    </CartProvider>
   
      
    
    </>
  )
}

export default App
