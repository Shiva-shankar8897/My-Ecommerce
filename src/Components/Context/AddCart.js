import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [CartItems, setCartItems] = useState([])
    const AddToCart = (item) => {
        setCartItems([...CartItems, item])
    }
    const RemoveFromCart = (item) => {
        setCartItems(CartItems.filter((user) => user !== item))
    }
    return (
        <CartContext.Provider value={{ CartItems, AddToCart, RemoveFromCart }}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart = () => {
    return useContext(CartContext)
}