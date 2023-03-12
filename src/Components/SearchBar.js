import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import {  useOutletContext } from 'react-router-dom'


const SearchBar = () => {

    const [movies, ,setSearchResults] = useOutletContext()
    const [searchInput, setSearchInput] = useState('')

    const handleSearchInput = (input) => {
        setSearchInput(input.toLowerCase())

        const foundMovies = movies.filter((movie) => {
            return movie.title.toLowerCase().includes(searchInput)
        })
        setSearchResults(foundMovies)
    }

    return(
        <Container>
            <Form.Group className="m-3" variant='dark'>
                <Row className='justify-content-center'>
                    <Form.Label column='lg' lg={4}>Search: </Form.Label>
                    <Col>
                        <Form.Control 
                            size="lg" 
                            type="text" 
                            placeholder="Enter Your Search Criteria" 
                            name='searchInput'
                            id='searchInput' 
                            onChange={(e) =>{
                                handleSearchInput(e.target.value)
                            }}
                                                
                        />            
                    </Col>
                </Row>
            </Form.Group>
        
        </Container>

    )
}

export default SearchBar