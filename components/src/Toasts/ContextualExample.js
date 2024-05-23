import Toast from 'react-bootstrap/Toast';

function ContextualExample() {
  return (
    <>
      {[
        'Primary',
        'Secondary',
        'Success',
        'Danger',
        'Warning',
        'Info',
        'Light',
        'Dark',
      ].map((variant, idx) => (
        <Toast
          className="d-inline-block m-1"
          bg={variant.toLowerCase()}
          key={idx}
        >
          <Toast.Header>
            <img
              style={{ width: 50, height: 50 }}
              src="https://banner2.cleanpng.com/20180531/sas/kisspng-bootstrap-react-software-framework-javascript-fron-5b0f9b1ab26fd7.9058729715277494027309.jpg"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body className={variant === 'Dark' && 'text-white'}>
            Hello, world! This is a toast message.
          </Toast.Body>
        </Toast>
      ))}
    </>
  );
}

export default ContextualExample;