import React, { useState, useEffect } from 'react';

import Categories from './Categories';

const CategoryList = ({ handleCategoryClick }) => {
  const [categoryList, setCategoryList] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = async () => {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/categories');
      const data = await response.json();

      setCategoryList((categoryList) => categoryList.concat(data));
      setIsFetching(false);
    } catch (error) {
      console.log(error);
    }
  };

  return <Categories categoryList={categoryList} isFetching={isFetching} handleCategoryClick={handleCategoryClick} />;
};

export default CategoryList;
