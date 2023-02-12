import {createContext, useState} from "react";
import axios from "axios";

export const ProductsContext = createContext();

const ProductsProvider = (props) => {
    const [products, setProducts] = useState([{}]);
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);


    const getProducts = async () => {
        const res = await axios.get('http://localhost:3001/api/products');
        setProducts(res.data.products);
        setLoading(false);
      }

    const addToCart = (product) => {
        setCart([...cart, product]);
    }

    const removeFromCart = (productid) => {
        setCart(cart.filter((item) => item._id !== productid));
    }

    

    return (
        <ProductsContext.Provider value={{products, getProducts, addToCart, removeFromCart, cart, loading}}>{props.children}</ProductsContext.Provider>
    )
}


export default ProductsProvider;