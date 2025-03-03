import React, { createContext, useState, ReactNode } from "react";

interface Product {
  name: string;
  price: number;
  image: string;
  description: string;
  quantity?: number;
}

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productName: string) => void;
  decreaseQuantity: (productName: string) => void;
}

export const CartContext = createContext<CartContextType | null>(null);

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.name === product.name);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.name === product.name ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productName: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== productName));
  };

  const decreaseQuantity = (productName: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === productName
          ? { ...item, quantity: item.quantity && item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      ).filter((item) => item.quantity && item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
