import { useContext, useEffect, useState } from 'react';
import { Button, Card, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { employeeContext } from '../context/employeeContext';
const Employee=({ link })=> {
    const { removeEmployee } = useContext(employeeContext)
    const [show, setShow] = useState(false);
    const [vote, setVote] = useState(link.puan);
    const handleShow = () => { setShow(true) }
    const handleClose = () => { setShow(false) }
    const handleSubmit = (e) => {
        e.preventDefault();
        removeEmployee(link.id);

    }
    const upVote = () => {
        setVote(++link.puan);
    }
    const downVote = () => {
        setVote(--link.puan);
    }
    useEffect(() => {
        handleClose();
    }, [link]);
    return (
        <>

            <div className='row' style={{ width: "50%", marginBottom: "20px" }}>
                <div style={{ paddingRight: "40px", paddingLeft: "40px", paddingTop: "30px", border: "1px solid grey", marginLeft: "30px", marginRight: "30px", textAlign: "center", fontSize: "35px", backgroundColor: "darkgrey" }}>{vote}</div>
                <OverlayTrigger id={`tooltip-top`} overlay={<Tooltip>Delete</Tooltip>}>
                    <div id='removediv'><i onClick={handleShow} style={{ color: "red", fontSize: "23px"}} class="fa-solid fa-circle-minus"></i></div>
                </OverlayTrigger>
                <Card className='employeeCard' style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{link.head}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{link.connection}</Card.Subtitle>
                        <Card.Link onClick={upVote} href="#">Up Vote</Card.Link>
                        <Card.Link onClick={downVote} href="#">Down Vote</Card.Link>
                    </Card.Body>
                </Card>
            </div>
            <Modal show={show}>
                <Modal.Header style={{ backgroundColor: "black", color: "white", fontWeight: "bold", fontSize: "20px" }}>
                    Remove Link
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: "lightgray", textAlign: "center", color: "grey" }}>
                    Do you Want to Remove :
                </Modal.Body>
                <Modal.Body style={{ backgroundColor: "lightgray", textAlign: "center", color: "black", fontWeight: "bold", fontSize: "30px" }}>
                    REDDIT
                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: "lightgray" }}>
                    <Button onClick={handleClose} style={{ marginLeft: "20px" }} variant="dark" type="submit">
                        CANCEL
                    </Button>
                    <Button onClick={handleSubmit} style={{ marginLeft: "20px" }} variant="dark" type="submit">
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );

}
export default Employee;
