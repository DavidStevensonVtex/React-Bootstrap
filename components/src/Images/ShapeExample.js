import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function ShapeExample() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image style={{ width: "171px", height: "180px" }} 
            src="https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary-800x450.webp" rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image style={{ width: "171px", height: "180px" }} 
            src="https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary-800x450.webp" roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image style={{ width: "171px", height: "180px" }} 
            src="https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary-800x450.webp" thumbnail />
        </Col>
      </Row>
    </Container>
  );
}

export default ShapeExample;