import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) =>{
const [cart, setCart] =useState(()=>{
    const savedCart = localStorage.getItem("cart")
    return JSON.parse(savedCart)
})

useEffect(()=>{
  localStorage.setItem("cart", JSON.stringify(cart))
}, [cart])

const addToCart = (product) =>{
    const existingProduct = cart.find((item)=>item.id===product.id&& item.size === product.size)
    if (existingProduct){
        const updatedCart = cart.map((item)=>item.id===product.id&& item.size === product.size?{ ...item, quantity: item.quantity+1}:item)
        setCart(updatedCart)
    }else{
        setCart([...cart, {...product, quantity: 1}])
    }

}
const removeFromCart = (product) =>{
    const updatedCart = cart.filter((item)=>item.id !==product.id|| item.size !== product.size)
    setCart(updatedCart)
}

const increaseQuant =(product)=>{
    const updatedCart = cart.map((item)=>item.id===product.id&& item.size === product.size?{...item, quantity: item.quantity+1}:item)
    setCart(updatedCart)
}
const decreaseQuant =(product)=>{
    const updatedCart =  cart.map((item)=>item.id===product.id&& item.size === product.size?{...item, quantity: Math.max(1, item.quantity-1)}:item)
    setCart(updatedCart)
}

return(
    <CartContext.Provider value={{cart, addToCart, removeFromCart, increaseQuant, decreaseQuant}}>
        {children}
    </CartContext.Provider>
)

}