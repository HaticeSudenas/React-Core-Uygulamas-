import { useContext, useState } from 'react';
import { Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { employeeContext } from '../context/employeeContext';
function AddForm() {
    const { addEmployee } = useContext(employeeContext);
    const [show, setShow] = useState(false);
    const handleClose = () => { setShow(false) }
    const [newEmployee, setNewEmployee] = useState({ head: "", connection: "", puan: "" });
    const { head, connection, puan } = newEmployee;
    const onInputChange = (e) => {
        setNewEmployee({ ...newEmployee, [e.target.name]: [e.target.value] });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee(head, connection, puan);

    }
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Link Name</Form.Label>
                    <Form.Control required name='head' value={head} onChange={(e) => onInputChange(e)} type="text" placeholder="e.g. Alphabet" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Link URL</Form.Label>
                    <Form.Control required name='connection' value={connection} onChange={(e) => onInputChange(e)} type="text" placeholder="e.g. http://abc.xyz" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Puan</Form.Label>
                    <Form.Control required name='puan' value={puan} onChange={(e) => onInputChange(e)} type="text" placeholder="0" />
                </Form.Group>
                <Button variant="dark" type="submit">
                    Add
                </Button>
            </Form>
        </>

    );

}
export default AddForm;