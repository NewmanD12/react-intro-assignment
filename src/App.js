import React, { Component } from 'react';
import Form from './Form';
import Table from './Table'

class App extends Component {
  state = {
    movies : []
  }

  addMovie = movie => {
    this.setState({movies : [...this.state.movies, movie]})
  }

  removeMovie = (index) => {
    const { movies } = this.state

    this.setState({
      movies : movies.filter((_, i) => {
        return i !== index
      })
    })
  }


  render() {
    return (
      <div className="App">
        <Form 
          addMovie={this.addMovie}
          years = {this.years}  
        />
        <Table 
          movieData = {this.state.movies}
          removeMovie = {this.removeMovie}
        />
      </div>
    );
  }
  
}

export default App;
