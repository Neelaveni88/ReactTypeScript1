import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>TamTree India Pvt Ltd</div>
        <ul>
            <Link to="/">
            <li>Home</li>
            </Link>
            <Link to="/About">
            <li>About</li>
            </Link>
            <Link to="/Service">
            <li>Service</li>
            </Link>
        </ul>
        
    </div>
  );
};
export default Navbar
