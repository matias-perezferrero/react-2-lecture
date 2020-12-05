import React from 'react'
import './Movie.css'

function Movie(props) {
    return (
    <div className="movie">
        I'm {props.movie.name}
        <button onClick={() => props.handleChangeIndex(props.index)}>
            See Details
        </button>
    </div>
    )
}

export default Movie