import { useState } from "react";

const images = [
  "https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1739552790Desktop_Banner_2.webp",
  "https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1739960164Hamleys_Promo_Web_Banner_1817x747px_02.webp",
  "https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1734602312Home-Page-banner-Desktop-1817x747-px.webp",
  "https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1736248799Desktop_banner_(5).webp",
  "https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1739960164Hamleys_Promo_Web_Banner_1817x747px_02.webp"

];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div style={{ position: "relative", width: "1200px", margin: "auto", overflow: "hidden" ,marginTop:"10px"}}>
      <div style={{ display: "flex", transition: "transform 0.5s ease-in-out", transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((src, index) => (
          <img key={index} src={src} style={{ width: "1200px", height: "500px" }} alt={`Slide ${index + 1}`} />
        ))}
      </div>

      <button onClick={prevSlide} style={{ position: "absolute", top: "50%", left: "10px", transform: "translateY(-50%)", background: "gray", color: "white", border: "none", padding: "5px" }}>
        &#10094;
      </button>

      <button onClick={nextSlide} style={{ position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)", background: "gray", color: "white", border: "none", padding: "5px" }}>
        &#10095;
      </button>

      <div style={{ position: "absolute", bottom: "10px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "5px" }}>
        {images.map((_, index) => (
          <div
            key={index}
            style={{ width: "10px", height: "10px", borderRadius: "50%", background: index === currentIndex ? "white" : "gray" }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
