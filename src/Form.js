import React, { Component } from 'react';
// import Form from 'react-bootstrap/Form'

// const years = []
// for(let i = 1850; i < 2024; i++){
//     years.push(i)
// }

// function handleChange(e) {
//     console.log('something')
// }

// const YearOptions = () => {
//     const options = years.map((year, index) => {
//         return(
//             <option 
//             type='text'
//             id = 'year'
//             name = 'year'
//             value = {year}
//             key = {index}
//             onChange = {handleChange}
//             >
//                 {year}
//             </option>
//         )
//     })
//     return <select >{options}</select>
// }

class AddForm extends Component {

    constructor(props){
        super(props); //inheriting props from Component

        // set the initial state of the Form
        this.initialState = {
            title : '',
            actors : '',
            plot : '',
            imbdRating : 0.0,
            director : '',
            year : 0,
            dateAdded : new Date().toLocaleDateString()
        };

        //set our initial state to state.
        this.state = this.initialState;
    }

    onFormSubmit = (event) => {
        //standard code for onSubmits 
        event.preventDefault();

        this.setState({
            dateAdded : new Date().toLocaleDateString()
        })
        this.props.addMovie(this.state);


        //clear inputs by setting form to inital state
        this.setState(this.initialState);
    }

    handleChange = (e) => {
        const { name, value } = e.target

        this.setState({
            [name] : value
        })
    }

    render() {
        const { title, actors, plot, imbdRating, director, year } = this.state;
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
                <input
                    type = 'text'
                    name = 'year'
                    value = {year}
                    onChange = {this.handleChange}
                >
                </input>
                <button type='submit'>Submit</button>
            </form>
        );
    }
}

export default AddForm