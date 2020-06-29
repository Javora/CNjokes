import React from 'react';
import { Form, Col } from 'react-bootstrap';

import JokeFromSearch from '../Joke/JokeFromSearch';

const SearchJokes = ({ handleSearchedValue, jokes }) => {
  return (
    <>
      <Form.Row>
        <Form.Group as={Col} sm="7">
          <h4>Search jokes which includes:</h4>
        </Form.Group>
        <Form.Group as={Col} sm="3">
          <Form.Control type="text" onChange={handleSearchedValue}></Form.Control>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} lg="12">
          <JokeFromSearch jokes={jokes} />
        </Form.Group>
      </Form.Row>
    </>
  );
};

export default SearchJokes;
