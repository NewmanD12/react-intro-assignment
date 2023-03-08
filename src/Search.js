import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

const searchToPass = {
    searchCategory : 'director',
    searchCriteria : 'No movies found'
}

let onFormChange = (event) => {
    searchToPass['searchCriteria'] = event.target.value
    // console.log(searchToPass)
}


// handles radio button functionality
let onChangeValue = (event) => {
    const directorRadio = document.getElementById('director')
    const actorRadio = document.getElementById('actor')
    const yearRadio = document.getElementById('year')
    const plotRadio = document.getElementById('plot')
    const titleRadio = document.getElementById('title')
    // console.log(event.target.value)
    if(event.target.value === 'actor'){
        yearRadio.checked = false
        directorRadio.checked = false
        plotRadio.checked = false
        titleRadio.checked = false
        searchToPass['searchCategory'] = 'actor'
    }
    if(event.target.value === 'director'){
        actorRadio.checked = false
        yearRadio.checked = false
        plotRadio.checked = false
        titleRadio.checked = false
        searchToPass['searchCategory'] = 'director'
    }
    if(event.target.value === 'year'){
        actorRadio.checked = false
        directorRadio.checked = false
        plotRadio.checked = false
        titleRadio.checked = false
        searchToPass['searchCategory'] = 'year'
    }
    if(event.target.value === 'title'){
        actorRadio.checked = false
        directorRadio.checked = false
        plotRadio.checked = false
        yearRadio.checked = false
        searchToPass['searchCategory'] = 'title'
    }
    if(event.target.value === 'plot'){
        actorRadio.checked = false
        directorRadio.checked = false
        titleRadio.checked = false
        yearRadio.checked = false
        searchToPass['searchCategory'] = 'plot'
    }
}

const SearchBody = (props) => {
    return (
        <div onChange={() => props.filterMovie(searchToPass)}>
            <h1>Choose a category to search:</h1><br/>
            <input id="director" type='radio' value='director' defaultChecked/> Director
            <input id="title" type='radio' value='title'/> Title
            <input id="actor" type='radio' value='actor'/> Actor
            <input id="year" type='radio' value='year'/> Year
            <input id="plot" type='radio' value='plot'/> Plot
            <form onChange={onFormChange}>
                <label htmlFor='searchCriteria'>Search: </label>
                <input type='text' name="searchCriteria" id="searchCriteria"></input><br/>
            </form>
        </div>
    )
}


class Search extends Component {

    constructor(props) {
        super(props)
        this.initialState = {
            searchCategory : 'director',
            searchCriteria : ''
        }
    }

    render() {

        const {
            filterMovie
        }   = this.props

        return (
            <Container fluid='md' onChange={onChangeValue}>
                <SearchBody filterMovie={filterMovie}/>
            </Container>
        )
    }
}

export default Search