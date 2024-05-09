import Form from 'react-bootstrap/Form';
import "./FormControls.css"

function InputReadOnlyExample() {
  return (
    <Form.Control type="text" placeholder="Readonly input here..." value="My Read Only Value" readOnly />
  );
}

export default InputReadOnlyExample;