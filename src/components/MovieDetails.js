import React from 'react'
import './MovieDetails.css'

//TRY TO BE D.R.Y.
//D. Don't
//R. Repeat
//Y. Yourself

function MovieDetails(props) {

    const {year, rating, name, description} = props.movieToDisplay

    return (
        <div className="movie-details">
            I'm Movie Details and the movie that I am displaying is: {name}
            <p>Release Year: {year}</p>
            <p>Movie Rating: {rating}</p>
            <p>Movie Description: {description}</p>
        </div>
    );
}

export default MovieDetails