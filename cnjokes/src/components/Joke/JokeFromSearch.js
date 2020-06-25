import React from 'react';

export function JokeFromSearch({ joke }) {
    const jokeArray = joke.result;
    if (jokeArray) {
        return jokeArray.slice(0, 25).map((joke, index) => {
            if (joke.value) {
                return (
                    <li className="align mb-3" key={index}>
                        {joke.value}
                    </li>
                );
            } else {
                return null;
            }
        });
    }

    return null;
}
