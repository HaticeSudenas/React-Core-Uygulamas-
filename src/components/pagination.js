import { useEffect, useState } from "react";

const Pagination = ({pages,setCurrentPage,currentEmployees,sortedEmployees}) => {
    const numOfPages = [];
    for (var i = 1; i <= pages; i++) {
        numOfPages.push(i);
    }
    const [currentButton, setCurrentButton] = useState(1);
    useEffect(()=>{
        setCurrentPage(currentButton);
    },[currentButton,setCurrentPage])
    return (
        <div className="clearfix">
            <div className="hint-text col-3">Showing<b>{currentEmployees.length}</b> Out Of <b>{sortedEmployees.length}</b>Entries</div>
            <ul style={{ float: "right", paddingLeft: "200px" }} className="pagination col-6">
                <li className={`${currentButton === 1 ? 'page-item disabled' : 'page-item'}`}
                    onClick={()=>setCurrentButton((prev) => prev === 1 ? prev : prev - 1)}
                ><a className="page-link" href="#">  Previous  </a></li>

                {
                    numOfPages.map((page, index) => {
                        return (
                            <li key={index} className={`${currentButton === page ? 'page-item active' : 'page-item'}`}><a href="#!" className="page-link"
                                onClick = {() => setCurrentButton(page)}
                            >{page}</a></li>
                        )
                        
                    })
                }

                <li className={`${currentButton === numOfPages.length ? 'page-item disabled' : 'page-item'}`}
                    onClick={()=>setCurrentButton((prev) => prev === numOfPages.length ? prev : prev + 1)}
                ><a className="page-link" href="#">  Next  </a></li>

            </ul>
        </div>

    );
}
export default Pagination;