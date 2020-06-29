import React from 'react';

const Categories = ({ categoryList, isFetching, handleCategoryClick }) => {
  if (isFetching) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul className="category-list">
        {categoryList.map((category) => (
          <li className="category-item" key={category.toString()}>
            <button className="categories" onClick={handleCategoryClick} value={category}>
              {category}
            </button>
          </li>
        ))}
      </ul>
    );
  }
};

export default Categories;
