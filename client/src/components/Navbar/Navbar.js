import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
 return (
<nav>
        <div className="left">
            <h3> Vade Sneakers  </h3>
        </div>
        <div className="right">
            <ul>
                <Link className='links' to="/"> <li>Home</li> </Link>
                <Link className='links' to="/store"> <li>Sneakers</li> </Link>
                <Link className='links'  to="/cart"> <li>Cart</li> </Link>
            </ul>
        </div>
    </nav>
 )   

}

export default Navbar;