/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item) => {
        setCart([...cart, item]);

    }

    const removeFromCart = (item) => {
        console.log("removing " + item.name)
        const newCart = cart.filter((cartItem) => cartItem.id !== item.id);
        setCart(newCart);
    }

    // const clearCart = () => {
    //   setCart([]);
    // }

    // const isInCart = (item) => {
    //   return cart.some((cartItem) => cartItem.id === item.id);
    // }

    // const getTotalItems = () => {
    //   return cart.reduce((acc, item) => acc + item.quantity, 0);
    // }

    // const getTotalPrice = () => {
    //   return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    // }

    // const increaseQuantity = (item) => {
    //   const newCart = cart.map((cartItem) => {
    //     if (cartItem.id === item.id) {
    //       return { ...cartItem, quantity: cartItem.quantity + 1 };
    //     } else {
    //       return cartItem;
    //     }
    //   });
    //   setCart(newCart);
    // }

    // const decreaseQuantity = (item) => {
    //   const newCart = cart.map((cartItem) => {
    //     if (cartItem.id === item.id) {
    //       return { ...cartItem, quantity: cartItem.quantity - 1 };
    //     } else {
    //       return cartItem;
    //     }
    //   });
    //   setCart(newCart);
    // }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            // clearCart,
            // isInCart,
            // getTotalItems,
            // getTotalPrice,
            // increaseQuantity,
            // decreaseQuantity
        }}>
            {children}
        </CartContext.Provider>
    );
}

// Path: src/components/Cart.jsx