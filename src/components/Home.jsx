import React from 'react';

const Home = ({ onSelect }) => {
  const categories = ['Anime', 'Filme', 'Série', 'Jogos', 'Mangá'];

  return (
    <div className="container">
      <h1>O que você quer ver?</h1>
      <div className="grid">
        {categories.map((cat) => (
          <button key={cat} onClick={() => onSelect(cat)} className="button">
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
