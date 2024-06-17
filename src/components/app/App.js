import './App.css';
import MovieService from '../../services/movie-service';
import MoviesList from '../movies-list/movie-list';
import Context from '../../context';
import { useState } from 'react';
export default function App() {

  const [movieList, setMovieList] = useState([]);
  const movieService = new MovieService();

  function updateMovieList(){
      const movies = movieService.getAllFilms()
      .then((array) => {
          setMovieList(array);
          return array
      })
  }
  const button = document.getElementById('button')
  button.addEventListener('click', () => updateMovieList())
  return (
    <Context.Provider value={{
      movieList
    }}>
      <div className='app'>
        <MoviesList/>
      </div>
    </Context.Provider>
  );
}
