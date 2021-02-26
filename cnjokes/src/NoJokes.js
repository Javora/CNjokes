import React, { Component } from 'react';

import Joke from './Joke';

class NoJokes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            NoJokes: 0,
            Jokes: null,
        }
    }

    handleNoJokesChange(event){
        this.setState({
            NoJokes: event.target.value
        })
    }

    getJokes(){
        let JokesCont = [];
        for(let i=0; i<this.state.NoJokes; i++){
            JokesCont.push(<Joke url="https://api.chucknorris.io/jokes/random"></Joke>)
        }

        this.setState({
            Jokes: JokesCont,
        })
    }

    render() {
        return (
            <>
            <input onChange={this.handleNoJokesChange.bind(this)}></input>
            <button onClick={this.getJokes.bind(this)}>get your number of jokes</button>
            {this.state.Jokes}
            </>
        )
    }
}

export default NoJokes;