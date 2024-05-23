import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function StackingExample() {
  return (
    <ToastContainer className="position-static">
      <Toast>
        <Toast.Header>
          <img style={{ width: 50, height: 50 }}
              src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" className="rounded me-2" alt="" />
          <strong className="me-auto">Bootstrap</strong>
          <small className="text-muted">just now</small>
        </Toast.Header>
        <Toast.Body>See? Just like this.</Toast.Body>
      </Toast>
      <Toast>
        <Toast.Header>
          <img style={{ width: 50, height: 50 }}
              src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" className="rounded me-2" alt="" />
          <strong className="me-auto">Bootstrap</strong>
          <small className="text-muted">2 seconds ago</small>
        </Toast.Header>
        <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default StackingExample;