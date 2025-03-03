import React, { useContext } from "react";
import { CartContext } from "./CartProvider";

interface AddToCartProps {
  product: { name: string; price: number; image: string; description: string };
}

const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
  const cartContext = useContext(CartContext);
  if (!cartContext) return null;
  const { addToCart } = cartContext;

  return (
    <button
      onClick={() => addToCart(product)}
      className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600"
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;