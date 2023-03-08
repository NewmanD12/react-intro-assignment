import React from 'react';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

const DATA_URL = "https://raw.githubusercontent.com/dd-code-immersives/movie-project/main/react-intro-form/data/movies.json"

function App() {
  const [movies, setMovies] = useState([])
  // const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    fetch(DATA_URL)
    .then((result) => result.json())
    .then((result) => {
      setMovies(result)
    })
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Outlet context={[movies]}/>
    </div>
  );
  
}

export default App;
