import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import './App.css';

import { Header } from './components/Header/Header';
import { Body } from './components/Body/Body';

export function App() {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryClick = (event) => {
        const category = event.target.value;
        setSelectedCategory(category);
    };

    return (
        <div>
            <Header handleCategoryClick={handleCategoryClick} />
            <Body selectedCategory={selectedCategory} />
        </div>
    );
}

export default App;
