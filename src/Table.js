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
    const rows = props.data.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.title}</td>
                <td>{row.actors}</td>
                <td>{row.plot}</td>
                <td>{row.imbdRating}</td>
                <td>{row.director}</td>
                <td>{row.year}</td>
                <td>{row.dateAdded}</td>
                <td><button onClick={() => props.removeMovie(index)}>Delete</button></td>
            </tr>
        )
    })

    return <tbody>{rows}</tbody>
}

class Table extends Component {
    render() {

        const {
            movieData, 
            removeMovie
        } = this.props


        return (
            <table>
                <TableHeader />
                <TableBody 
                    data={movieData}
                    removeMovie={removeMovie}
                />
            </table>
        )
    }
}

export default Table