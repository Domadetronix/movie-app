import React from "react"
import './movie.css' 
import MovieService from "../../services/movie-service";
import { useState } from 'react';
import { format } from 'date-fns';

const movieService = new MovieService();
export default function Movie({movie}){
    console.log("movie" + movie.id);

    function shortText(text){
        return text.split(' ').reduce((a, b) => (a + b).length < 150 ? a+' '+b : a) + "..."
    }
    
  console.log(movie);
    
    const [movieImg, setMovieImg] = useState([]);
    //movieService.getMovieImage(movie.id).then (res => setMovieImg(res))

    return (<div className="movie-list__item movie-item">
                <div className="movie-image">
                    <img className = "poster" src= {`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                </div>
                <div className="movie-info">
                    <div className="movie-info__name">{movie.title}</div>
                    <div className="movie-info__date">{format(movie.release_date, 'PP')}</div>
                    <div className="movie-info__genres">{movie.genre_ids}</div>
                    <div className="movie-info__description">{shortText(movie.overview)}</div>
                    <div className="movie-info__rating">{movie.vote_average}</div>
                </div>
            </div>
    )
}