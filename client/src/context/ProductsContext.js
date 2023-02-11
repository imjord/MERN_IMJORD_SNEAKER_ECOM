import {createContext, useState} from "react";
import axios from "axios";

export const ProductsContext = createContext();

const ProductsProvider = (props) => {
    const [products, setProducts] = useState([{}]);

    const getProducts = async () => {
        const res = await axios.get('http://localhost:3001/api/products');
        setProducts(res.data.products);
      }
    return (
        <ProductsContext.Provider value={{products, getProducts}}>{props.children}</ProductsContext.Provider>
    )
}


export default ProductsProvider;