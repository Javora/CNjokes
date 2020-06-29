import React, { useState, useEffect } from 'react';
import { Row, Button, Col } from 'react-bootstrap';

import Joke from '../Joke/Joke';

const RandomJoke = () => {
  const [joke, setJoke] = useState({
    value: '',
  });

  useEffect(() => {
    getRandomJoke();
  }, []);

  const getRandomJoke = async () => {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();

      const { value } = data;
      setJoke({ value });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Row>
      <Col sm="5 offset-sm-6">
        <h1 className="left">Here's a random joke</h1>
      </Col>
      <Col sm="1">
        <Button onClick={getRandomJoke} variant="danger" size="lg">
          <i className="fa fa-refresh"></i>
        </Button>
      </Col>
      <Col sm={{ span: 5, offset: 6 }}>
        <Joke jokes={joke} color="text-white" />
      </Col>
    </Row>
  );
};

export default RandomJoke;
