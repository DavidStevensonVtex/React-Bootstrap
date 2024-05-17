import './App.css';
import { useState } from 'react' ;
import React from 'react';
import MyModalWithGrid from "./Modals/MyModalWithGrid" ;
import Button from 'react-bootstrap/Button';

function App() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch modal with grid
      </Button>

      <MyModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

// render(<App />);

export default App;
