import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function TriggerRendererProp() {
  return (
    <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id="button-tooltip-2">Check out this avatar</Tooltip>}
    >
      {({ ref, ...triggerHandler }) => (
        <Button
          variant="light"
          {...triggerHandler}
          className="d-inline-flex align-items-center"
        >
          <Image
            ref={ref}
            roundedCircle
            src="https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary-800x450.webp"
          />
          <span className="ms-1">Hover to see</span>
        </Button>
      )}
    </OverlayTrigger>
  );
}

export default TriggerRendererProp;