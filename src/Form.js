import React, { Component } from 'react';

class Form extends Component {

    constructor(props){
        super(props); //inheriting props from Component

        // set the initial state of the Form
        this.initialState = {
            title : '',
            actors : '',
            plot : '',
            imbdRating : '',
            director : '',
            year : '',
            dateAdded : ''
        };

        //set our initial state to state.
        this.state = this.initialState;
    }

    onFormSubmit = (event) => {
        //standard code for onSubmits 
        event.preventDefault();
        
        //set the current state of our form to the handle submit
        this.props.addMovie(this.state);

        //clear inputs by setting form to inital state
        this.setState(this.initialState);
    }

    handleChange = e => {
        const { name, value } = e.target

        this.setState({
            [name] : value
        })
    }


    render() {
        const { title, actors, plot, imbdRating, director, year, dateAdded } = this.state;
        return (
            <form onSubmit={this.onFormSubmit}>
                <label htmlFor=''>Title:</label>
                <input 
                    type='text'
                    id = 'title'
                    name = 'title'
                    value = {title}
                    onChange={this.handleChange}
                    /><br/>
                <label htmlFor=''>Actors:</label>
                <input type='text'
                    id = 'actors'
                    name = 'actors'
                    value = {actors}
                    onChange={this.handleChange}
                /><br/>
                <label htmlFor=''>Plot:</label>
                <input type='text'
                    id = 'plot'
                    name = 'plot'
                    value={plot}
                    onChange={this.handleChange}
                /><br/>
                <label htmlFor=''>IMBD Rating:</label>
                <input type='text'
                    id = 'imbdRating'
                    name = 'imbdRating'
                    value = {imbdRating}
                    onChange={this.handleChange}
                /><br/>
                <label htmlFor=''>Director:</label>
                <input type='text'
                    id = 'director'
                    name = 'director'
                    value = {director}
                    onChange={this.handleChange}
                /><br/>
                <label htmlFor=''>Year:</label>
                <input type='text'
                    id = 'year'
                    name = 'year'
                    value = {year}
                    onChange={this.handleChange}
                ></input><br/>
                <label htmlFor=''>Date Added:</label>
                <input type='date'
                    id = 'dateAdded'
                    name = 'dateAdded'
                    value = {dateAdded}
                    onChange={this.handleChange}
                /><br/>
                <button type='submit'>Submit</button>
            </form>
        );
    }
}

export default Form