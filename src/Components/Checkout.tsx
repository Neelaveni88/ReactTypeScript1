import React, { useContext } from "react";
import { CartContext } from "./CartProvider";

const Checkout: React.FC = () => {
  const cartContext = useContext(CartContext);
  if (!cartContext) return null;

  const { cart } = cartContext;

  const totalAmount = cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);

  return (
    <div style={{textAlign:"center"}}>
      <h2>Checkout</h2>
      <p>Total Amount: ${totalAmount}</p>
      <button style={{padding:"10px",borderRadius:"10px",backgroundColor:"green",color:"white"}}>Confirm Order</button>
    </div>
  );
};

export default Checkout;
