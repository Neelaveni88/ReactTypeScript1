import React from "react";
import Product from "./Product";
import Carousel from "./Carousal";

const products = [
  { name: "Pig House", price: 3999, image: "https://m.media-amazon.com/images/I/6120YZ7jKkL._SX522_.jpg", description: "Peppa Pig Lights and Sounds Family Home Playset" },
  { name: "Doll House", price: 3599, image: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/10522202a.webp", description: "Toyzone My Glamour Doll House 122 Pieces - Multicolor" },
  { name: "Barbie Doll", price: 599, image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491280295/300/491280295-1.webp", description: "Barbie Chelsea Assortment Dolls & Accessories for Girls Age 3Y+" },
  { name: "Wooden Toys", price: 706, image: "https://rukminim2.flixcart.com/image/850/1000/k2hwivk0/doll-doll-house/j/v/z/etikoppaka-wooden-couples-learnomatics-original-imafhtzwnpvhxfns.jpeg?q=90&crop=false", description: "Best Friends Forever Series 3 Shannon Fashion Play Doll, 3Y+" },
  { name: "Best Friend Forever", price: 1599, image: "https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/494377127/300/494377127-1_1735.webp", description: "Peppa Pig Lights and Sounds Family Home Playset" },
  { name: "Disney Frozen Elsa", price: 1499, image: "https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/494423349/300/494423349-1_8750.webp", description: "Disney Frozen Elsa Plus Piece Count,Girls,3Y+,Multicolour" },
  { name: "Disney The Little Mermaid", price: 1499, image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/493663122/300/493663122-1_1236.webp", description: "Disney The Little Mermaid Ariel Fashion Doll,Girls,3Y+,Multicolour" },
  { name: "Masha And The Bear", price: 399, image: "https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/494348328/300/494348328-1_1854.webp", description: "Masha And The Bear Simba Masha Playset Kitchen" }
];

const Ecommerce: React.FC = () => {
  return (
    <>
    <Carousel/>
    
    <div className="product-container">
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
    </>
  );
};

export default Ecommerce;

