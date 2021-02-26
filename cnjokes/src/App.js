import React, { Component } from 'react';
import './App.css';

import Greeting from './Greeting';
import Joke from './Joke';
import NoJoke from './NoJokes';
import Categories from './Categories';
import Search from './search';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'John',
    };
  }

  onChangeName = newName => this.setState({ name: newName })

  render() {
    return (
      <div className="App">
        <Greeting name={this.state.name} />
        <button onClick={() => this.onChangeName('John')}>John</button>
        <button onClick={() => this.onChangeName('Ivan')}>Ivan</button>
        <button onClick={() => this.onChangeName('Alice')}>Alice</button>
        <button onClick={() => this.onChangeName('David')}>David</button>
        <Joke url="https://api.chucknorris.io/jokes/random"></Joke>
        <NoJoke></NoJoke>
        <Categories></Categories>
        <Search></Search>
      </div>
    );
  }
}

export default App;
