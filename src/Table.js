import React, { Component } from "react";


const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Title</th>
                <th>Actors</th>
                <th>Plot</th>
                <th>IMBD Rating</th>
                <th>Director</th>
                <th>Year</th>
                <th>Date Added</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    if(props.searchMovies.length > 0) {
        const rows = props.searchMovies.map((row, index) => {
            return (
                <tr key={index}>
                    <td>{row.title}</td>
                    <td>{row.actors.join(', ')}</td>
                    <td>{row.plot}</td>
                    <td>{row.imdbRating}</td>
                    <td>{row.director}</td>
                    <td>{row.year}</td>
                    <td>{row.dateAdded}</td>
                    <td><button onClick={() => props.removeMovie(row.title)}>Delete</button></td>
                </tr>
            )
        })
        return <tbody>{rows}</tbody>
    }
    const rows = props.data.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.title}</td>
                <td>{row.actors.join(', ')}</td>
                <td>{row.plot}</td>
                <td>{row.imdbRating}</td>
                <td>{row.director}</td>
                <td>{row.year}</td>
                <td>{row.dateAdded}</td>
                <td><button onClick={() => props.removeMovie(row.title)}>Delete</button></td>
            </tr>
        )
    })

    return <tbody>{rows}</tbody>

}

class Table extends Component {
    render() {

        const {
            movieData, 
            removeMovie,
            searchMovies
        } = this.props


        return (
            <table>
                <TableHeader />
                <TableBody 
                    data={movieData}
                    searchMovies={searchMovies}
                    removeMovie={removeMovie}
                />
            </table>
        )
    }
}

export default Table