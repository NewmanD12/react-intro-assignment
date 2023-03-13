import React from 'react';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

const DATA_URL = "https://raw.githubusercontent.com/dd-code-immersives/movie-project/main/react-intro-form/data/movies.json"

const url = 'https://moviesdatabase.p.rapidapi.com/titles?limit=50';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0c7a345f28msh1941853a14d2fdfp1d2b06jsn04101928ad52',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }
};


function App() {

  const [movies, setMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  

  

  useEffect(() => {
    fetch(url, options)
    .then((result) => result.json())
    .then((json) => {
      setMovies(json.results)
    })
  }, [movies])

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
