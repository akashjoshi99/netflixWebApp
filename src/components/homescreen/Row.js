import React, { useEffect, useState } from 'react'
import "./Row.css"
import axios from '../../adapters/axios'

function Row({title, fetchURL, isLargeRow = false}) {
    const [movies, setMovies] = useState([])
    const baseURL = "http://image.tmdb.org/t/p/original/"


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL)
            setMovies(request.data.results)
            return request
        }

        fetchData()
    }, [fetchURL])

    console.log(movies)

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
            {movies.map(movie => (
                <img 
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${baseURL}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                }`} alt={movie?.name || movie?.original_name || movie?.title}/>
            ))}
            </div>
        </div>
    )
}

export default Row
