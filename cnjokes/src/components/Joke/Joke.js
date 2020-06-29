import React from 'react';

const Joke = ({ jokes, color }) => {
  if (jokes && Array.isArray(jokes)) {
    return jokes.map((joke, index) => (
      <li className="align mb-3" key={index}>
        {joke.value}
      </li>
    ));
  } else {
    return <i className={color}>{jokes.value}</i>;
  }
};

export default Joke;
