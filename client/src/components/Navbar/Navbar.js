import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { ProductsContext } from '../../context/ProductsContext';

const Navbar = () => {
    const {cart} = useContext(ProductsContext);
 return (
<nav>
        <div className="left">
            <h3> Vade Sneakers  </h3>
        </div>
        <div className="right">
            <ul>
                <Link className='links' to="/"> <li>Home</li> </Link>
                <Link className='links' to="/store"> <li>Sneakers</li> </Link>
                <Link className='links'  to="/cart"> <li className='cart-nav'>Cart <span className='cart-number'>{cart.length > 0 ? cart.length : null}</span></li> </Link>
            </ul>
        </div>
    </nav>
 )   

}

export default Navbar;