import React from 'react';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

const DATA_URL = "https://raw.githubusercontent.com/dd-code-immersives/movie-project/main/react-intro-form/data/movies.json"

function App() {

  const [movies, setMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  

  useEffect(() => {
    fetch(DATA_URL)
    .then((result) => result.json())
    .then((result) => {
      setMovies(result)
    })
  }, [])

  const handleAddMovie = (title, actors, plot, genre, imdbRating, year, director) => {
    const newMovie = {
      title,
      actors,
      plot,
      genre,
      imdbRating,
      year,
      director
    }

    setMovies([...movies, newMovie])
  }



  return (
    <div className="App">
      <NavBar />
      <Outlet context={[movies, handleAddMovie, setSearchResults, searchResults]}/>
    </div>
  );
  
}

export default App;
