import React, {useEffect, useContext} from "react";
import "./Products.css"
import {ProductsContext} from "../context/ProductsContext";

const Products = () => {
    const {products, getProducts}  = useContext(ProductsContext);
    useEffect(() => {
        getProducts();
    }, [])
    return (
    <div className="product-section">
        <div className="page-title">
        <h1>Sneakers</h1>
        <h2>Made</h2>
        <h3>By</h3>
        <h4>Vade</h4>
        </div>
        <div className="product-list">
        {products.map((product) => {
                return (
                    
                    <div className="products">
                    <div className="product">
                    <img className="product-img" src={`assets/images/${product.image}`} alt="sneaker" />
                    <div className="product-name">{product.name}</div>
                    <div className="product-price">{`$${product.price}`}</div>
                    </div>
                    </div>
                  
                )
            })}
        </div>   
    </div>
    )   
}


export default Products;