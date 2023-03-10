import React from 'react';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

const DATA_URL = "https://raw.githubusercontent.com/dd-code-immersives/movie-project/main/react-intro-form/data/movies.json"

function App() {

  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState('');
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

  const handleSearchInput = (input) => {
    let title = input.target.value.toLowerCase()
    console.log(title)
    // setSearchInput(title)

    const foundMovies = movies.filter((movie) => {
      return movie.title.toLowerCase().includes(searchInput)
    })
    // setSearchResults(foundMovies)
  }

  return (
    <div className="App">
      <NavBar />
      <Outlet context={[movies, handleAddMovie, handleSearchInput]}/>
    </div>
  );
  
}

export default App;
