import Card from 'react-bootstrap/Card';
import "./FormControls.css" ;

function ImageAndTextExample() {
  return (
    <>
      <Card style={{ width: '30rem' }}>
        <Card.Img variant="top" src="https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary-800x450.webp" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card style={{ width: '30rem' }}>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src="https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary-800x450.webp" />
      </Card>
    </>
  );
}

export default ImageAndTextExample;