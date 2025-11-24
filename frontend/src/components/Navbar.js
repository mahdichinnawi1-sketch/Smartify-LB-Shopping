import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaStore, FaHeart, FaShoppingCart } from "react-icons/fa";
import "../styles/styles.css";

const Navbar = ({ cart = [], favorites = [] }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/home" className="navbar-logo">Smartify LB</Link>
      </div>

      <div className="navbar-right">
        <Link to="/home" className="nav-link">
          <FaHome />
          <span className="link-text">Home</span>
        </Link>

        <Link to="/products" className="nav-link">
          <FaStore />
          <span className="link-text">Products</span>
        </Link>

        <Link to="/favorites" className="nav-link icon-btn">
          <FaHeart />
          <span className="link-text hide-on-mobile">Favorites</span>
          {favorites.length > 0 && <span className="icon-badge">{favorites.length}</span>}
        </Link>

        <Link to="/cart" className="nav-link icon-btn">
          <FaShoppingCart />
          <span className="link-text hide-on-mobile">Cart</span>
          {cart.length > 0 && <span className="icon-badge">{cart.length}</span>}
        </Link>

        <Link to="/about" className="nav-link">
  <span className="link-text">About</span>
</Link>

        
      </div>
    </nav>
  );
};

export default Navbar;
