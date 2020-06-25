import React from 'react';

export function Categories({ categoryList, isFetching, handleCategoryClick }) {
    return (
        <>
            {isFetching ? (
                <div>Loading...</div>
            ) : (
                <ul className="category-list">
                    {categoryList.map((category) => (
                        <li className="category-item" key={category.toString()}>
                            <button className="categories" onClick={handleCategoryClick} value={category}>
                                {category}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}
