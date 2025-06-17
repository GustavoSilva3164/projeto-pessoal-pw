import React from 'react';
import { data } from './CategoryData';

const Category = ({ category, onSelectItem, onBack }) => {
  const items = data[category] || [];
  return (
    <div className="container">
      <button onClick={onBack} className="back-button">Voltar</button>
      <h2>{category}</h2>
      <div className="grid-3">
        {items.map((item) => (
          <div key={item.name} className="card" onClick={() => onSelectItem(item)}>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
