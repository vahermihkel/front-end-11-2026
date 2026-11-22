import { useState } from "react";
import { CartSumContext } from "./CartSumContext";

export const CartSumContextProvider = ({ children }) => {
  const [cartSum, setCartSum] = useState(calculateInitialCartSum());

  function calculateInitialCartSum() {
    const cart = JSON.parse(localStorage.getItem("ostukorv")) || [];
    return cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  }

  return (
    <CartSumContext.Provider value={{ cartSum, setCartSum }}>
      {children}
    </CartSumContext.Provider>
  );
}