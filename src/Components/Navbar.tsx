import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <h3 className="logo">Dojana's Little Treasures</h3>
      <div>
      <ul>
      <li><Link style={{textDecoration:"none", color:"white",marginLeft:"260px"}} to="/">Home</Link></li>
      <li><Link style={{textDecoration:"none", color:"white"}} to="/about">About</Link></li>
      <li> <Link style={{textDecoration:"none", color:"white"}}to="/contactus">Contact Us</Link></li>
      <li><Link style={{textDecoration:"none", color:"white"}}to="/cart">Cart</Link></li>
      <li><Link style={{textDecoration:"none", color:"white"}} to="/checkout">Checkout</Link></li>
      </ul>
      </div>
      <button className="button1">Log in</button>
   
    </div>
  );
};

export default Navbar;
