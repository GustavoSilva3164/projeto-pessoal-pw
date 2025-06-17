import React, { useState } from 'react';
import Home from './components/Home';
import Category from './components/Category';
import Details from './components/Details';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentCategory, setCurrentCategory] = useState('');
  const [currentItem, setCurrentItem] = useState(null);

  const handleCategorySelect = (category) => {
    setCurrentCategory(category);
    setCurrentPage('category');
  };

  const handleItemSelect = (item) => {
    setCurrentItem(item);
    setCurrentPage('details');
  };

  const handleBack = () => {
    if (currentPage === 'details') {
      setCurrentPage('category');
    } else {
      setCurrentPage('home');
    }
  };

  return (
    <div>
      {currentPage === 'home' && <Home onSelect={handleCategorySelect} />}
      {currentPage === 'category' && (
        <Category category={currentCategory} onSelectItem={handleItemSelect} onBack={handleBack} />
      )}
      {currentPage === 'details' && (
        <Details item={currentItem} onBack={handleBack} />
      )}
    </div>
  );
};

export default App;
