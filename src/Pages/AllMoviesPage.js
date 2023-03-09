import { useNavigate, useOutletContext } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { useState } from "react";

const AllMoviesPage = () => {
    

    const [movies] = useOutletContext()
    const navigate = useNavigate()
    const [searchInput, setSearchInput] = useState('')
    const [searchResults, setSearchResults] = useState([])
    

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

        const rows = movies.map((movie, index) => {
            
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

    const onFormChange = (e) => {
        console.log(e.target.value)
        setSearchInput(e.target.value)
        // console.log(setSearchInput(e.target.value))
    }

    const SearchBar = () => {
        return(
            <Form.Group className="mb-3" variant='dark' onChange={onFormChange} >
                <Row>
                    <Form.Label column='lg' lg={4}>Search: </Form.Label>
                    <Col>
                        <Form.Control 
                            size="lg" 
                            type="text" 
                            placeholder="Enter Your Seach Criteria" 
                            name='searchInput'
                            id='searchInput'
                        />            
                    </Col>
                </Row>
            </Form.Group>
        )
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