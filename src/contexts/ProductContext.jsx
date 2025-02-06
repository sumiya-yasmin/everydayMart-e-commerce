import { createContext, useEffect, useState } from "react"
import localProducts from '../data/product'
import PropTypes from "prop-types";
export const ProductContext = createContext();

export const ProductProvider = ({children}) => {
const [products, setProducts] = useState(localProducts);
const [useAPI, setUseAPI] = useState(false);

useEffect(() => {
    console.log("Fetching Data... Use API?", useAPI);
if(useAPI){
    fetch("https://fakestoreapi.com/products")
    .then((response)=> response.json())
    .then((data)=>setProducts(data) )
    .catch((error)=> console.error("Error fetching data", error) )
}else{
    setProducts(localProducts);
}
},[useAPI])

  return (
    <ProductContext.Provider value={{products, useAPI, setUseAPI }}>
        {children}
    </ProductContext.Provider>
  )
}
ProductProvider.propTypes = {
    children:PropTypes.node.isRequired
}
