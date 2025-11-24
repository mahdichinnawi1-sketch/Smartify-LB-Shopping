import React from "react";

const FavoritesPage = ({ favorites, removeFromFavort }) => {
  return (
    <div className="page-container">
      <h1>Your Favorite Products</h1>
      {favorites.length === 0 ? (
        <p className="empty-text">No favorites added yet.</p>
      ) : (
        <div className="favorites-list">
          {favorites.map((item) => (
            <div key={item.id} className="fav-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button onClick={() => removeFromFavort(item.id)}>Remove from favorites</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
