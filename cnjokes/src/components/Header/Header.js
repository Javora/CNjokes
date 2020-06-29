import React from 'react';

import RandomJoke from '../RandomJoke/RandomJoke';
import CategoryList from '../CategoryList/CategoryList';

const Header = ({ handleCategoryClick }) => {
  return (
    <header className="header">
      <h1 className="text-black">
        CN J<i className="fa fa-smile-o"></i>
        <span>KES</span>
      </h1>
      <RandomJoke />
      <CategoryList handleCategoryClick={handleCategoryClick} />
    </header>
  );
};

export default Header;
