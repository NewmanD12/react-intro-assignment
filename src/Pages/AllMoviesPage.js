import { useNavigate, useOutletContext } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AllMoviesPage = () => {
    

    const allMovies = useOutletContext()
    const navigate = useNavigate()

    const TableHead = () => {
        return(
            <thead>
                    <tr>
                        <th>Title</th>
                    </tr>
                </thead>
        )
    }

    const TableBody = () => {

        const rows = allMovies[0].map((movie, index) => {
            
            return(
                <tr key={index}>
                    <td onClick={() => {
                        navigate(`/single-movie/${movie.title}`)
                    }}>{movie.title}</td>
                </tr>
            )
        })

        return <tbody>{rows}</tbody>
    }


    return(
        <Container fluid>
            <Row className="justify-content-center">
                <Col className="text-center">
                    <h1>This is a list of all of the movies.</h1>
                    <table>
                        <TableHead />
                        <TableBody />
                    </table>                
                </Col>
            </Row>
        </Container>
    )
}

export default AllMoviesPage