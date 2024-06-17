import Movie from "../movie/movie"
import React from "react";
import { useState, useContext } from "react";
import Context from "../../context";
import './movie-list.css'

export default function MoviesList(){
    const {movieList} = useContext(Context)
    console.log("movie-list");  

    return  (
        <div className="movie-list">
            {
            movieList.map(movie => (
                <Movie key = {movie.id} movie = {movie}/>
            ))
            }
        </div>
    )
}