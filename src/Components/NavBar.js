import Navbar from 'react-bootstrap/NavBar'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container fluid className="justify-content-center">
                <Row>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/all-movies">All Movies</Nav.Link>
                        <Nav.Link href="/add-movie">Add New Movie</Nav.Link>
                    </Nav>
                </Row>
            </Container>
        </Navbar>
    )
}
export default NavBar