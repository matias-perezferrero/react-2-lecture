import React from 'react'
import './MoviesContainer.css'
import MovieDetails from './MovieDetails'
import MoviesList from './MoviesList'
import data from '../data.json'
// import React, {Component} from 'react'

// class MoviesContainer extends Component {
class MoviesContainer extends React.Component {
    constructor() {
        super()

        this.state = {
            movies: [...data],
            index: 0,
        }

        this.handleChangeIndex = this.handleChangeIndex.bind(this)
    }

    handleChangeIndex(index) {
        //the setState method takes in an object
        // this.setState({})
        // this.setState({
        //     index: index
        // })

        this.setState({
            index
        })
    }

    render() {
        const {movies, index} = this.state

        return (
            <div className="movies-container">
                <MovieDetails movieToDisplay={movies[index]}/>
                <MoviesList testProp="Some random string" movies={movies} handleChangeIndex={this.handleChangeIndex}/>
            </div>
        )

        // return (
        //     <div className="movies-container">
        //         <MovieDetails movieToDisplay={this.state.movies[this.state.index]}/>
        //         <MoviesList testProp="Some random string" movies={this.state.movies}/>
        //     </div>
        // )
    }
}

export default MoviesContainer