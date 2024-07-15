import React, { useState } from 'react';
import Location from './Location';
import myImage from './images/favoritesicon.png';

const App = () => {
  const [favorites, setFavorites] = useState([]);

  const handleFavorite = (location, isFavorited) => {
    setFavorites(prevFavorites => {
      if (isFavorited) {
        return [...prevFavorites, location];
      } else {
        return prevFavorites.filter(fav => fav !== location);
      }
    });
  };

  return (
    <div>
      <center><h1>Travel Favorites</h1></center>
     <img src={myImage} alt="favorites icon" />
      <Location name="Location 1" onFavorite={handleFavorite} />
      <Location name="Location 2" onFavorite={handleFavorite} />
      <h3>Favorites:</h3>
      <ul>
        {favorites.map(fav => (
          <li key={fav}>{fav}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;


