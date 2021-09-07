import { Container, Row, Col, Form, Button, Navbar, Carousel } from 'react-bootstrap';
import './App.css';

function App() {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('hello', e)
  }
  return (
    <Container fluid>
      <Row>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
          Fatoma Events
          </Navbar.Brand>
        </Container>
      </Navbar>
      </Row>
      <Row>

      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.inclusion-europe.eu/wp-content/uploads/2019/01/inclusion-europe-whatwedo-events-scaled.jpg"
      alt="First slide"
      />
    <Carousel.Caption>
      <h3>Fatoma for all your events</h3>
      <p>Fatoma Company well help and assist all our events to achive the best result</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={6}>
          <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
  
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasiLastname">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" placeholder="Enter your last name" />
              
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicbd">
              <Form.Label>birth-date</Form.Label>
              <Form.Control type="date" placeholder="Enter birth-date" />
              
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="I read and i accept all the policy" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={ handleSubmit }>
              Submit
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default App;