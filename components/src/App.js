import './App.css';
import React from 'react';
import MyVerticallyCenteredModal from "./Modals/MyVerticallyCenteredModal" ;
import Button from 'react-bootstrap/Button';

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

// render(<App />);

export default App;
