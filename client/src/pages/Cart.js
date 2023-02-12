import React, {useContext, useState, useEffect} from "react";
import {ProductsContext} from "../context/ProductsContext";
import "./Cart.css";
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import CheckoutForm from "../components/CheckoutForm/CheckoutForm";

const stripePromise = loadStripe("pk_test_51MaYxoEGcX5qIHP0hTkakb8nlVfUgG9RgAPYyb46y1PW9GWDypLr5pwsyRhFEaKN4dhpyb3HXeCKPHCY2jXpGXqK007be2obBR");



const Cart = () => {
    const {cart, removeFromCart, addToCart, removeAllFromCart} = useContext(ProductsContext);
    const [pay, setPay] = useState(false);

    const payFunction = () => {
        setPay(true);
        removeAllFromCart();
        let total = cart.reduce((acc, item) => acc + item.price, 0);
        alert(`Your total is $${total} and your order has been placed!`);
    
    }

  

    useEffect(() => {
        

    }, [cart])
    return (
     
    <div className="main-cart-section">
        <div className="cart-title">
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
                        <button onClick={() => payFunction()}>Checkout</button>
                        </div>
                    </div>  }
        </div>
        {/* {pay ?   <Elements stripe={stripePromise}> <CheckoutForm /></Elements> : null} */}
        
    
    </div>
    
    )
}

export default Cart;