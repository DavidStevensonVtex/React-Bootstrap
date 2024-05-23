import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function PlacementMultiExample() {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="bg-success position-relative"
      style={{ minHeight: '300px' }}
    >
      <ToastContainer position="top-end" className="p-3" style={{ zIndex: 1 }}>
        <Toast>
          <Toast.Header>
            <img
              style={{ width: 50, height: 50 }}
              src="https://banner2.cleanpng.com/20180531/sas/kisspng-bootstrap-react-software-framework-javascript-fron-5b0f9b1ab26fd7.9058729715277494027309.jpg"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small className="text-muted">just now</small>
          </Toast.Header>
          <Toast.Body>See? Just like this.</Toast.Body>
        </Toast>
        <Toast>
          <Toast.Header>
            <img
              style={{ width: 50, height: 50 }}
              src="https://banner2.cleanpng.com/20180531/sas/kisspng-bootstrap-react-software-framework-javascript-fron-5b0f9b1ab26fd7.9058729715277494027309.jpg"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small className="text-muted">2 seconds ago</small>
          </Toast.Header>
          <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}

export default PlacementMultiExample;