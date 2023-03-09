import { useOutletContext, useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SingleMoviePage = () => {

    const allMovies = useOutletContext()
    const params = useParams()

    let movie = allMovies[0].find((movie) =>{
            return movie.title === params.filmTitle
        }
    )

    return(
        <Container fluid>
            <Row  className="justify-content-md-center">
                <Col>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title>{movie.title}</Card.Title>
                            <Card.Text>Actors: {movie.actors.join(', ')}</Card.Text>
                            <Card.Text>Plot: {movie.plot}</Card.Text>
                            <Card.Text>Genre: {movie.genre}</Card.Text>
                            <Card.Text>IMDB Rating: {movie.imdbRating}</Card.Text>
                            <Card.Text>Year: {movie.year}</Card.Text>
                            <Card.Text>Director: {movie.director}</Card.Text>
                        </Card.Body>
                    </Card>   
                </Col>
            </Row>
        </Container>
        
        
    )

}

export default SingleMoviePage