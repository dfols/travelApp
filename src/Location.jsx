import React, { useState } from 'react';

const Location = ({ name, onFavorite }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
    onFavorite(name, !isFavorited);
  };

  return (
    <div style={styles.location}>
      <h2>{name}</h2>
      <button 
        style={{ 
          ...styles.favoriteBtn, 
          color: isFavorited ? 'gold' : 'black' 
        }} 
        onClick={handleFavorite}
      >
        <span>{isFavorited ? '★' : '☆'}</span> 
      </button>
    </div>
  );
};

const styles = {
  location: {
    margin: '20px',
    padding: '20px',
    border: '1px solid #ddd'
  },
  favoriteBtn: {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    padding: '10px',
    cursor: 'pointer',
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center'
  }
};

export default Location;
