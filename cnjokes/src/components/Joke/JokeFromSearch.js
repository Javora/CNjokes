import React from 'react';

const JokeFromSearch = ({ jokes }) => {
  const jokeArray = jokes.result;

  if (jokeArray) {
    return jokeArray.slice(0, 25).map((joke) => {
      return (
        <li className="align mb-3" key={joke.id}>
          {joke.value}
        </li>
      );
    });
  }
  return null;
};

export default JokeFromSearch;
