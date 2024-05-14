import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./FormControls.css";

function ValidationInputGroupExample() {
  return (
    <InputGroup hasValidation>
      <InputGroup.Text>@</InputGroup.Text>
      <Form.Control type="text" required isInvalid />
      <Form.Control.Feedback type="invalid">
        Please choose a username.
      </Form.Control.Feedback>
    </InputGroup>
  );
}

export default ValidationInputGroupExample;