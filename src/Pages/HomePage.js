import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const HomePage = () => {
    


    return(
        <Container fluid>
            <Row className='justify-content-center'>
                <Col>
                    <h1>This is the home page of the movies app.</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage