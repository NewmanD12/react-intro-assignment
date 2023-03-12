import { useNavigate, useOutletContext } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import SearchBar from "../Components/SearchBar";

const AllMoviesPage = () => {
    

    const [movies, , , searchResults] = useOutletContext()
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
        if(searchResults.length > 0){
            
            const rows = searchResults.map((movie, index) => {
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
        
        const rows = movies.map((movie, index) => {
            
            return(
                <tr key={index}>
                    <td onClick={() => {
                        navigate(`/single-movie/${movie.title}`)
                    }}>{movie.title}</td>
                </tr>
            )
        })
        // console.log(rows)

        return <tbody>{rows}</tbody>
    }




    return(
        <Container fluid>
            <Row className="justify-content-center">
                <Col className="text-center" lg='5'>
                    <SearchBar />
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col className="text-center" lg='6'>
                    <h1>This is a list of all of the movies.</h1>
                    <Table striped bordered hover variant="dark">
                        <TableHead />
                        <TableBody />
                    </Table>                
                </Col>
            </Row>
        </Container>
    )
}

export default AllMoviesPage