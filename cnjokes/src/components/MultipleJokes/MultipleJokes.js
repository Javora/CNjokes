import React from 'react';

import Joke from '../Joke/Joke';
import { Form, Col, Button, FormGroup } from 'react-bootstrap';

const MultipleJokes = ({ numberOfJokes, handleNumberOfJokes, getRandomJokes, jokes }) => {
  return (
    <>
      <Form.Row>
        <Form.Group as={Col} sm="7">
          <h4>Select how many jokes do you want:</h4>
        </Form.Group>
        <Form.Group as={Col} sm="3">
          <Form.Control type="number" value={numberOfJokes} onChange={handleNumberOfJokes}></Form.Control>
        </Form.Group>
        <FormGroup as={Col} sm="2">
          <Button onClick={getRandomJokes} variant="danger">
            Get jokes
          </Button>
        </FormGroup>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} lg="12">
          <Joke jokes={jokes} />
        </Form.Group>
      </Form.Row>
    </>
  );
};

export default MultipleJokes;
