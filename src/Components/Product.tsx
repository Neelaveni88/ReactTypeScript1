import React, { useContext } from "react";
import { CartContext } from "./CartProvider";


interface ProductProps {
  product: {
    name: string;
    price: number;
    image: string;
    description: string;
  };
}

 const Product: React.FC<ProductProps> = ({ product }) => {
  const cartContext = useContext(CartContext);
  if (!cartContext) return null;

  const { addToCart } = cartContext;

  

  return (
    <>


    <div className="card">
      <img src={product.image} alt={product.name} className="card-image" />
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p className="card-description">{product.description}</p>
        <p className="card-price">${product.price}</p>
        <button className="card-button" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
    </>
  );
};


export default Product