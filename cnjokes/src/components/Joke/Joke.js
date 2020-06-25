import React from 'react';

export function Joke({ jokes, color }) {
    return Array.isArray(jokes) ? (
        jokes.map((joke, index) => (
            <li className="align mb-3" key={index}>
                {joke}
            </li>
        ))
    ) : (
        <i className={color}>{jokes.value}</i>
    );
}
