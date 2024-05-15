import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./FormControls.css" ;

function ListGroupWithHeaderExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Header><h4>Featured</h4></Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default ListGroupWithHeaderExample;