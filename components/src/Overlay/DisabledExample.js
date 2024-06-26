import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function DisabledExample() {
    return (
        <>
            <br /><br /><br />
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled" placement="bottom">Tooltip!</Tooltip>}>
                <span className="d-inline-block">
                    <Button disabled style={{ pointerEvents: 'none' }}>
                        Disabled button
                    </Button>
                </span>
            </OverlayTrigger>
        </>

    );
}

export default DisabledExample;