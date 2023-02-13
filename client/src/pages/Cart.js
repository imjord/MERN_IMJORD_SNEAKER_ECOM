import React, {useContext, useState, useEffect} from "react";
import {ProductsContext} from "../context/ProductsContext";
import "./Cart.css";

import { CardElement, Elements, useStripe, useElements } from "@stripe/react-stripe-js";




const Cart = () => {
    const {cart, removeFromCart, addToCart, removeAllFromCart} = useContext(ProductsContext);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);
    const stripe = useStripe();
    const elements = useElements();


    const successfulPaymet = () => {
        removeAllFromCart();
        setSuccess(true);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        });
        if (!error) {
            try {
                const {id} = paymentMethod;
                const response = await fetch("http://localhost:3001/api/payment", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        amount: cart.reduce((acc, item) => acc + item.price, 0),
                        id
                    })
                });
                const data = await response.json();
                if (data.success) {
                    console.log("Successful payment");
                    successfulPaymet()
                    
                }
            } catch (error) {
                console.log("Error", error);
                setError(error.message);
            }
        } else {
            console.log(error.message);
        }
    };


        

    useEffect(() => {
        

    }, [cart])
    return (
     
    <div className="main-cart-section">
        {success ? <div className="success-message">Stripe Payment Successful. Thank you for using my website.</div> : null}
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
                
        <div className="card">
        <form id="payment-form" onSubmit={handleSubmit}>
            <label htmlFor="card-element">Credit or debit card</label>
            <div className="label"> <CardElement /> </div>
        <button type="submit">Pay</button>
        </form>
        </div>
       
                </div>
                <div className="checkout-total">
                    <h3>Total  </h3>
                    <h3>{` :  $${cart.reduce((acc, item) => acc + item.price, 0)}`}</h3>
                    
                    </div>
                    
                    </div>  }
        </div>
        {/* {pay ?   <Elements stripe={stripePromise}> <CheckoutForm /></Elements> : null} */}
        
    
    </div>
    
    )
}

export default Cart;