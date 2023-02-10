import { Route, Routes } from 'react-router-dom';
import './App.css';

// PAGES
import Navbar from './components/Navbar/Navbar.js';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Products from './pages/Products.js';
import Cart from './pages/Cart.js';



function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    </>
  );
}

export default App;
