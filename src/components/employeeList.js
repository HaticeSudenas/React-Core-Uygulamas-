import { useContext, useEffect, useState } from 'react';
import {Button, Dropdown, Modal} from 'react-bootstrap';
import { employeeContext } from '../context/employeeContext';
import AddForm from './addForm';
import Employee from './employee';
import Pagination from './pagination';
function EmployeeList() {
    const { sortedEmployees,sortedEmployees1} = useContext(employeeContext);
    const [show, setShow] = useState(false);
    const handleClose = () => { setShow(false) }
    const handleShow = () => { setShow(true) }

    const [sorted, setSorted] = useState(false);
    const sortedZ = () => { setSorted(false) }
    const sortedA = () => { setSorted(true) }

    const [currentPage, setCurrentPage] = useState(1);
    const [employeesPerPage] = useState(2)


    /*const [showAlert, setShowAlert] = useState(false);
    const handleShowAlert = () => {
        setShowAlert(true)
        setTimeout(()=>{
            setShowAlert(false);
        },2000);
    };*/
    useEffect(() => {
        handleClose();
        /*return () => {
            handleShowAlert();
        }*/
    }, [sortedEmployees]);


    const indexOfLastEmployee = currentPage * employeesPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    const currentEmployees = sortedEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);
    const currentEmployees1 = sortedEmployees1.slice(indexOfFirstEmployee, indexOfLastEmployee);
    const totalPagesNum = Math.ceil(sortedEmployees.length /employeesPerPage);



    return (
        <>
            <div className="table-title">
                <div style={{ marginTop: "10px" }} className="column">
                    <div style={{ display: "flex", marginRight: "0px" }} className="row">
                        <div className="col-sm-6"><h1 style={{ color: "grey" }}>LİNKS.COM</h1></div>
                        <div className="col-sm-4"><h3 style={{ display: "inline" }} >LİNKVOTE Changlee</h3></div>
                    </div>
                    <hr />
                    <Button onClick={handleShow} style={{ marginLeft: "450px", paddingTop: "20px", padding: "5px", fontSize: "19px" }} variant="outline-dark"><h1 style={{ fontSize: "45px", float: "right", marginLeft: "20px", color: "black", border: "2px solid grey", padding: "10px" }}>+</h1>SUBMIT A LINK</Button>
                    <Dropdown style={{ marginLeft: "470px", marginTop: "20px" }}>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            Dropdown Button
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={sortedZ} href="#/action-1">Most Voted (Z - A)</Dropdown.Item>
                            <Dropdown.Item onClick={sortedA} href="#/action-2">Less Voted (A - Z)</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    {sorted===true?currentEmployees.map((link) => (<Employee key={link.id} link={link} />)):currentEmployees1.map((link) => (<Employee key={link.id} link={link} />))}
                    
                </div>
            </div>

            <Pagination currentEmployees={currentEmployees} sortedEmployees={sortedEmployees} pages = {totalPagesNum} setCurrentPage  =   {setCurrentPage}/>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Footer>
                        <Button onClick={handleClose} variant='light'><i class="fa fa-arrow-left" aria-hidden="true"></i>    Return to List</Button>
                    </Modal.Footer>
                    <Modal.Title>
                        Add New Link
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddForm />
                </Modal.Body>
            </Modal>
        </>
    );


}
export default EmployeeList;
//sorted===true?currentEmployees.sort((a,b) => (a.head < b.head ? -1 : 1)).map((link) => (<Employee key={link.id} link={link} />)):currentEmployees1.sort((a,b) => (a.head < b.head ? 1 : -1 )).map((link) => (<Employee key={link.id} link={link} />))