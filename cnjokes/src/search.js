import React, { Component } from 'react';

import Joke from './Joke';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Jokes: [],
            Categories: null,
            JokesSearch: null,
        }
    }

    handleJokesSearchChange(event){
        let jokesQuery = event.target.value
        this.setState({
            JokesSearch: event.target.value
        })

        fetch(`https://api.chucknorris.io/jokes/search?query=${jokesQuery}`)
            .then(res => res.json())
            .then(
                (result) => {
                    let resultArr = Object.values(result).splice(1,1).flat();

                    console.log(result);
                    console.log('resultArr',resultArr);
                    let trimmedArr = resultArr.slice(0,25).map(joke => {
                        return <div key={joke.value}>{joke.value}</div> 
                    })

                    console.log(trimmedArr);

                    this.setState({
                        Jokes: trimmedArr,
                    });
                },
            )

    }

    getJokes(event) {
        let JokesCont = [];


        JokesCont = [];
        
        for(let i=0; i<25; i++){
            JokesCont.push(<Joke url={`https://api.chucknorris.io/jokes/random?category=${event.target.innerHTML}`} key={event.target.innerHTML + i}></Joke>)
        }

        this.setState({
            Jokes: JokesCont,
        })
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
                    <input onChange={this.handleJokesSearchChange.bind(this)}></input>
                </div>
                <did>{this.state.Jokes}</did>
            </>
        )
    }
}

export default Search;