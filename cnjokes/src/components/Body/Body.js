import { Container } from 'react-bootstrap';
import React, { useState } from 'react';

import MultipleJokes from '../MultipleJokes/MultipleJokes';
import SearchJokes from '../SearchJokes/SearchJokes';

const RANDOM_JOKE = 'https://api.chucknorris.io/jokes/random';

const Body = ({ selectedCategory }) => {
  const [jokes, setJokes] = useState(['']);
  const [numberOfJokes, setNumberOfJokes] = useState('');

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
      const fetchedResponse = await fetchQueries(searchedWord);
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
      response = await fetch(RANDOM_JOKE);
    } else {
      response = await fetch(`${RANDOM_JOKE}?category=${selectedCategory}`);
    }
    const data = await response.json();
    return data;
  };

  const getRandomJokes = () => {
    if (numberOfJokes < 0 || numberOfJokes === '') {
      setJokes([]);
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
};

export default Body;
