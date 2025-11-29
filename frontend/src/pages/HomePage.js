import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import product1 from "../images/product1.png";
import product2 from "../images/product2.png";
import product3 from "../images/product3.png";
import product4 from "../images/product4.png";
import product5 from "../images/product5.png";
import product6 from "../images/product6.png";

import homeBackground from "../images/home.png";

const HomePage = () => {
  const navigate = useNavigate();

  const images = [product1, product2, product3, product4, product5, product6];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade out
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true); // fade in next image
      }, 500); // fade duration
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Styles
  const pageStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 0",

    
    backgroundImage: `url(${homeBackground})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const carouselBlockStyle = {
    width: "80%",
    maxWidth: "900px",
    height: "400px",
    borderRadius: "16px",
    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.6)",
    overflow: "hidden",
    marginBottom: "40px",
    position: "relative",
    backgroundColor: "#111",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const carouselImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    top: 0,
    left: 0,
    opacity: fade ? 1 : 0,
    transition: "opacity 0.5s ease-in-out",
  };

  const welcomeBlockStyle = {
    backgroundColor: "#111",
    padding: "40px",
    maxWidth: "700px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.5)",
    color: "#fff",
    textAlign: "center",
  };

  const shopButtonStyle = {
    marginTop: "20px",
    padding: "12px 30px",
    fontSize: "16px",
    fontWeight: "bold",
    backgroundColor: "#ff6b00",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  const handleShopClick = () => {
    navigate("/products"); // Navigate to ProductsPage
  };

  return (
    <div style={pageStyle}>
      {/* Carousel */}
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <div style={carouselBlockStyle}>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Product ${index + 1}`}
              style={{
                ...carouselImageStyle,
                opacity: index === currentImageIndex ? 1 : 0,
              }}
            />
          ))}
        </div>
      </div>

      {/* Welcome Block */}
      <div style={welcomeBlockStyle}>
        <h1 className="page-title">Welcome to Smartify LB</h1>
        <p style={{ fontSize: 18 }}>
          Discover top electronics — carefully selected, great prices and fast delivery.
        </p>
        <button style={shopButtonStyle} onClick={handleShopClick}>
          Shop
        </button>
      </div>
    </div>
  );
};

export default HomePage;
