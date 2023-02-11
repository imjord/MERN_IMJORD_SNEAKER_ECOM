import React from "react";
import "./Products.css"


const Products = () => {
    return (
    <div className="main-section">
    <h1>Sneakers Page</h1>
    <div className="products">
        <div className="product">
            <img className="product-img" src="https://images.unsplash.com/photo-1517436073-3b3a7e7f8d9c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2tlZXBhcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="sneaker" />
            <div className="product-name">Nike Air Max 270</div>
            <div className="product-price">$120</div>
            </div>
            <div className="product">
            <img className="product-img" src="https://images.unsplash.com/photo-1517436073-3b3a7e7f8d9c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2tlZXBhcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="sneaker" />
            <div className="product-name">Nike Air Max 280</div>
            <div className="product-price">$120</div>
            </div>
    </div>
    </div>
    )   
}


export default Products;