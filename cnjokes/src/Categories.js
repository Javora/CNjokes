import React, { Component } from 'react';

import Joke from './Joke';

class Categories extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Jokes: [],
            Categories: null,
            NoJokes: null,
        }
    }

    handleNoJokesChange(event){
        this.setState({
            NoJokes: event.target.value
        })
    }

    getJokes(event) {
        let JokesCont = [];


        JokesCont = [];
        
        for(let i=0; i<this.state.NoJokes; i++){
            JokesCont.push(<Joke url={`https://api.chucknorris.io/jokes/random?category=${event.target.innerHTML}`} key={event.target.innerHTML + i}></Joke>)
        }

        this.setState({
            Jokes: JokesCont,
        })
    }

    componentDidMount() {
        fetch('https://api.chucknorris.io/jokes/categories')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        Categories: result
                    });
                },
            )
    }

    render() {
        const categories = this.state.Categories;
        const buttons = [];
        if (categories) {
            for (let i = 0; i < categories.length; i++) {
                buttons.push(<button onClick={this.getJokes.bind(this)}>{categories[i]}</button>)
            }
        }

        return (
            <>
                <div>
                    <input onChange={this.handleNoJokesChange.bind(this)}></input>
                    {buttons}
                </div>
                <did>{this.state.Jokes}</did>
            </>
        )
    }
}

export default Categories;