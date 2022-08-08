import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export const employeeContext = createContext();

const EmployeeContextProvider = (props) => {
    const [links, setLink] = useState([
        { id: uuidv4(), head: "Backer News", connection: "(https://news.ycombinator.com/)", puan: "12" },
        { id: uuidv4(), head: "Aroduct Hunt", connection: "(https://producthunt.com/)", puan: "41" },
        { id: uuidv4(), head: "REDDIT", connection: "(https://www.reddit.com/)", puan: "12" }
    ]);
    const [links1, setLink1] = useState([
        { id: uuidv4(), head: "Backer News", connection: "(https://news.ycombinator.com/)", puan: "12" },
        { id: uuidv4(), head: "Aroduct Hunt", connection: "(https://producthunt.com/)", puan: "41" },
        { id: uuidv4(), head: "REDDIT", connection: "(https://www.reddit.com/)", puan: "12" }
    ]);
    const addEmployee=(head,connection,puan)=>{
        setLink([{id:uuidv4(),head,connection,puan},...links]);
        setLink1([{id:uuidv4(),head,connection,puan},...links]);
    };
    const removeEmployee = (id) => {
        setLink(links.filter(link => link.id !==id))
        setLink1(links.filter(link => link.id !==id))
    };
    const sortedEmployees=links.sort((a,b) => (a.head < b.head ? -1 : 1));
    const sortedEmployees1=links1.sort((a,b) => (a.head < b.head ? 1 : -1));
    return(
        <employeeContext.Provider value={{sortedEmployees,sortedEmployees1,addEmployee,removeEmployee}}>
            {props.children}
        </employeeContext.Provider>
    );

}
export default EmployeeContextProvider;

