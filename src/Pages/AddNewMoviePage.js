import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";

//let's use react-router-dom's context provider
// to pass info to child routes
import { useNavigate, useOutletContext } from "react-router-dom";

const AddNewMoviePage = () => {

    const [movies, handleAddMovie] = useOutletContext()
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [actors, setActors] = useState('')
    const [plot, setPlot] = useState('')
    const [genre, setGenre] = useState('')
    const [imdbRating, setImdbRating] = useState('')
    const [year, setYear] = useState('')
    const [director, setDirector] = useState('')

    return(
        <Container >
            <Row className="justify-content-md-center">
                <Col lg='5'>
                    <h1>Add a New Movie</h1>
                    <Form.Group>
                        <Form.Label>Title: </Form.Label>
                        <Form.Control type="text" placeholder="Enter Title" onChange={(e) => {
                            setTitle(e.target.value)
                        }}/>
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <Form.Label>Actors: </Form.Label>
                        <Form.Control type="text" placeholder="Enter Actors" onChange={(e) => {
                            setActors(e.target.value)
                        }}/>
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <Form.Label>Plot: </Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter Plot" onChange={(e) => {
                            setPlot(e.target.value)
                        }}/>
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <Form.Label>Genre: </Form.Label>
                        <Form.Control type="text" placeholder="Enter Title" onChange={(e) => {
                            setGenre(e.target.value)
                        }}/>
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <Form.Label>IMDb Rating: </Form.Label>
                        <Form.Control type="text" placeholder="Enter IMDb Rating" onChange={(e) => {
                            setImdbRating(e.target.value)
                        }}/>
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <Form.Label>Year: </Form.Label>
                        <Form.Control type="text" placeholder="Enter Year" onChange={(e) => {
                            setYear(e.target.value)
                        }}/>
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <Form.Label>Director: </Form.Label>
                        <Form.Control type="text" placeholder="Enter Director" onChange={(e) => {
                            setDirector(e.target.value)
                        }}/>
                    </Form.Group>
                    <br/>
                    <Button variant="dark" onClick={() => {
                        console.log(title, actors, plot, genre, imdbRating, year, director)
                        handleAddMovie(title, actors.split(','), plot, genre, imdbRating, year, director)
                        navigate('/all-movies')
                    }}>Submit</Button>

                </Col>
            </Row>
        </Container>
    )

}

export default AddNewMoviePage