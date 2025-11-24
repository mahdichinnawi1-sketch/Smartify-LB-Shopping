import React from "react";
import products from "../data/products";

const ProductsPage = ({ addToCart, addToFavorites }) => {
  return (
    <div className="page-container">
      <h1 className="page-title">Products</h1>
      <div className="products-container">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <button className="cart-btn" onClick={() => addToCart(item)}>Add to Cart</button>
            <button className="fav-btn" onClick={() => addToFavorites(item)}>Add to Favorites</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
