import { useState, createContext, useContext } from "react";
const defaultValue = {};
const CartContext = createContext(defaultValue);
const CartProvider = ({ children }) => {
  const [items, setItems] = useState(0);
  return (
    <CartContext.Provider value={{ items, setItems }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);

export { CartProvider };
