import React, {useContext, useState, useEffect} from "react";
import {ProductsContext} from "../context/ProductsContext";
import "./Cart.css";




const Cart = () => {
    const {cart, removeFromCart, addToCart} = useContext(ProductsContext);

    useEffect(() => {
        

    }, [cart])
    return (
    <div className="main-cart-section">
        <div className="cart-title">
        <h1>Cart Page</h1>
        </div>
        <div className="cart-wrapper">
        
   
    {cart.length === 0 ? <h2>Cart is empty</h2> :
    <div className="cart-section">
            {cart.map((product) => {
                return (
                    <div className="cart-item">
                        <div>{product.name}</div>
                        <div>{`$${product.price}`}</div>
                        {/* remove from car btn */}
                        <div className="remove-from-cart">
                        <button className="remove-from-cart-btn" onClick={() => removeFromCart(product._id)}>Remove from Cart</button>
                        </div>

                    </div>
                    )
            })}
    </div>
    }   
        {cart.length === 0 ? null : <div className="checkout-section">
            <div className="checkout-title">
                <h2>Checkout</h2>
                </div>
                <div className="checkout-total">
                    <h3>Total  </h3>
                    <h3>{` :  $${cart.reduce((acc, item) => acc + item.price, 0)}`}</h3>
                    </div>
                    <div className="checkout-btn">
                        <button>Checkout</button>
                        </div>
                    </div>  }
        </div>
        
    
    </div>
    )
}

export default Cart;