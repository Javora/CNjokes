import { Container } from 'react-bootstrap';
import React, { useState } from 'react';

import { MultipleJokes } from '../MultipleJokes/MultipleJokes';
import { SearchJokes } from '../SearchJokes/SearchJokes';

export function Body({ selectedCategory }) {
    const [jokes, setJokes] = useState(['']);
    const [numberOfJokes, setNumberOfJokes] = useState('');
    // const [searchedQuery, setSearchedQuery] = useState('');

    const handleNumberOfJokes = (event) => {
        const numberOfJokesInInput = event.target.value;

        if (numberOfJokesInInput === '') {
            setNumberOfJokes('');
        } else {
            setNumberOfJokes(parseInt(numberOfJokesInInput));
        }
    };

    const handleSearchedValue = async (event) => {
        const searchedWord = event.target.value;
        if (searchedWord.length > 2) {
            // setSearchedQuery(searchedWord);
            const fetchedResponse = await fetchQueries(searchedWord);
            console.log(fetchedResponse);
            setJokes(fetchedResponse);
        } else {
            setJokes([]);
        }
    };

    const fetchQueries = async (query) => {
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`);
        const data = await response.json();
        return data;
    };

    const fetchJokes = async () => {
        let response;

        if (selectedCategory === '') {
            response = await fetch('https://api.chucknorris.io/jokes/random');
        } else {
            response = await fetch(`https://api.chucknorris.io/jokes/random?category=${selectedCategory}`);
        }

        const data = await response.json();
        const { value } = data;

        return value;
    };

    const getRandomJokes = () => {
        if (numberOfJokes < 0) {
            return;
        }

        //creates an array of numberOfJokes length and then fills it.
        const jokeList = Array.from(Array(numberOfJokes), () => fetchJokes());
        Promise.all(jokeList).then((result) => setJokes(result));
    };

    return (
        <Container>
            <MultipleJokes
                getRandomJokes={getRandomJokes}
                jokes={jokes}
                numberOfJokes={numberOfJokes}
                handleNumberOfJokes={handleNumberOfJokes}
            />
            <SearchJokes handleSearchedValue={handleSearchedValue} jokes={jokes} />
        </Container>
    );
}
