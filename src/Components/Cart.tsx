import React, { useContext } from "react";
import { CartContext } from "./CartProvider";


const Cart: React.FC = () => {
  const cartContext = useContext(CartContext);
  if (!cartContext) return null;

  const { cart, removeFromCart, decreaseQuantity } = cartContext;

  return (
    <div style={{textAlign:"center"}}>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? <p>Your cart is empty.</p> : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.name}/>
              <h3>{item.name}</h3>
              <p>${item.price} x {item.quantity}</p>
              <button style={{padding:"10px",borderRadius:"10px",backgroundColor:"green",color:"white"}} onClick={() => removeFromCart(item.name)}>Remove</button>
              <button style={{padding:"10px",borderRadius:"10px",backgroundColor:"green",color:"white"}} onClick={() => decreaseQuantity(item.name)}>-</button>
            </li>
          ))}
        </ul>
      )}
  </div>
  )}

export default Cart;

