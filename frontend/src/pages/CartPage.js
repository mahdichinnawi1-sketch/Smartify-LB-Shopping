import React from "react";

const CartPage = ({ cart, removeFromCart }) => {
  return (
    <div className="page-container">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p className="empty-text">Your cart is empty.</p>
      ) : (
        <div className="cart-list">
          {cart.map((item) => (
            <div key={item.id} className="cart-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
