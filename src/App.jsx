import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;