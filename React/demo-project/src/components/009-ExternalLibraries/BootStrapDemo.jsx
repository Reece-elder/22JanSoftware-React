import "../../css/BootStrapDemo.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Toast from "react-bootstrap/Toast";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

const BootStrapDemo = () => {
  return (
    <div>
      <h2 class="blue-text"> Header 1</h2>
      <h3 class="green-border"> Header 2</h3>
      <h4> Header 3</h4>

      <Container fluid="md">
        <Row>
          <Col className="green-border">1 of 3</Col>
          <Col className="green-border">2 of 3</Col>
          <Col className="green-border" xs={7}>
            3 of 3
          </Col>
        </Row>

        <Row>
          <Col xs={6} md={4} className="purple-border">
            xs=6 md=4
          </Col>
          <Col xs={6} md={4} className="purple-border">
            xs=6 md=4
          </Col>
          <Col xs={6} md={4} className="purple-border">
            xs=6 md=4
          </Col>
        </Row>
      </Container>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Toast>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
      </Toast>
    </div>
  );
};

export default BootStrapDemo;
