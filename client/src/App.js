import { Route, Routes } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
// PAGES
import Navbar from './components/Navbar/Navbar.js';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Products from './pages/Products.js';
import Cart from './pages/Cart.js';



function App() {
const [products, setProducts] = useState([{}]);


const getProducts = async () => {
  const res = await axios.get('http://localhost:3001/api/products');
  setProducts(res.data.products);
}

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Products getProducts={getProducts} products={products} />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    </>
  );
}

export default App;
