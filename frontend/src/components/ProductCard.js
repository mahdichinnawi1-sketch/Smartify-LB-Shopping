import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import "../styles/styles.css";

function ProductCard({ product, cart, setCart, favorites, setFavorites }) {
  const addToCart = () => {
    if (!cart.find((p) => p.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const addToFavorites = () => {
    if (!favorites.find((p) => p.id === product.id)) {
      setFavorites([...favorites, product]);
    }
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>
      <p>${product.price}</p>

      <div className="product-buttons">
        <button onClick={addToCart} className="cart-btn">
          <FaShoppingCart /> Add to Cart
        </button>

        <button onClick={addToFavorites} className="fav-btn">
          <FaHeart /> Favorite
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
