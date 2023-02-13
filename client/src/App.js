import { Route, Routes } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
// PAGES
import Navbar from './components/Navbar/Navbar.js';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Products from './pages/Products.js';
import Cart from './pages/Cart.js';
import { Elements} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { ProductsContext } from './context/ProductsContext';
// import dotenv from 'dotenv';

const stripePromise = loadStripe("pk_test_51MaYxoEGcX5qIHP0hTkakb8nlVfUgG9RgAPYyb46y1PW9GWDypLr5pwsyRhFEaKN4dhpyb3HXeCKPHCY2jXpGXqK007be2obBR");




function App() {





  return (
    <>
    <Elements stripe={stripePromise}>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    </Elements>
    </>
  );
}

export default App;
