import React from 'react'
import './MoviesList.css'
import Movie from './Movie'

// const MoviesList = () => {
//     return (
//     <div className="movies-list">
//         I'm the MoviesList
//         <Movie />
//     </div>
//     )
// }

class MoviesList extends React.Component {

    render() {
        let mappedMovies = this.props.movies.map((e, i) => {
            return <Movie movie={e} index={i} handleChangeIndex={this.props.handleChangeIndex}/>
        })

        return (
            <div className="movies-list">
                I'm the MoviesList
                {/* <button onClick={() => this.props.handleChangeIndex(5)}>Change index to 5</button> */}
                {mappedMovies}
                {/* <Movie movie={this.props.movies[0]}/>
                <Movie movie={this.props.movies[1]}/>
                <Movie movie={this.props.movies[2]}/>
                <Movie movie={this.props.movies[3]}/>
                <Movie movie={this.props.movies[4]}/>
                <Movie movie={this.props.movies[5]}/>
                <Movie movie={this.props.movies[6]}/>
                <Movie movie={this.props.movies[7]}/>
                <Movie movie={this.props.movies[8]}/>
                <Movie movie={this.props.movies[9]}/> */}
            </div>
        )
    }
}

export default MoviesList