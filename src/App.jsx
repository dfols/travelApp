import React, { useState, useEffect } from 'react';
import Location from './Location';
import myImage from './images/favoritesicon.png';

const App = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Fetch favorites from localStorage when the component mounts
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    // Save favorites to localStorage whenever it changes
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

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
    <div style={styles.container}>
      <div style={styles.header}>
        <center><h1>Travel Favorites</h1></center>
        <img src={myImage} alt="favorites icon" style={styles.headerImage} />
      </div>
      <div style={styles.locations}>
        <Location name="Location 1" onFavorite={handleFavorite} />
        <Location name="Location 2" onFavorite={handleFavorite} />
      </div>
      <div style={styles.favorites}>
        <h3>Favorites:</h3>
        <ul>
          {favorites.map(fav => (
            <li key={fav}>{fav}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    marginBottom: '20px',
  },
  headerImage: {
    width: '100px',
    height: 'auto',
    display: 'block',
    margin: '0 auto',
  },
  locations: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  favorites: {
    marginTop: '20px',
  }
};

export default App;
