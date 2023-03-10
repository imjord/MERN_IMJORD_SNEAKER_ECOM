import {createContext, useState} from "react";
import axios from "axios";

export const ProductsContext = createContext();

const ProductsProvider = (props) => {
    const [products, setProducts] = useState([{}]);
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);


    const getProducts = async () => {
        const res = await axios.get('/api/products');
        setProducts(res.data.products);
        setLoading(false);
      }

    const addToCart = (product) => {
        setCart([...cart, product]);
    }

    const removeFromCart = (productid) => {
        setCart(cart.filter((item) => item._id !== productid));
    }
    const removeAllFromCart = () => {
        setCart([]);
    }

    

    return (
        <ProductsContext.Provider value={{products, getProducts, addToCart, removeFromCart, cart, loading, removeAllFromCart}}>{props.children}</ProductsContext.Provider>
    )
}


export default ProductsProvider;