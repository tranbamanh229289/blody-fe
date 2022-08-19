import { memo, useCallback, useState } from "react";

export const Paginate = memo(()=>{
    const [currentPage, setCurrentPage] = useState<number>(1);
    const handleSelectedPage = useCallback((id: number)=>()=>{
        setCurrentPage(id);
    },[currentPage])

    const handlePrevious = useCallback((min:number)=>()=>{
        if(currentPage > min){
            setCurrentPage(prev=>prev-1);
        }
    }, [currentPage])

    const handleNext = useCallback((max:number)=>()=>{
        if(currentPage < max ){
            setCurrentPage(prev=>prev+1);
        }
    }, [currentPage])

    return (
        <div className="paginate">
            <nav aria-label="...">
                <ul className="pagination">
                    <li className={"page-item" + ( currentPage == 0? "disable":"")} onClick={handlePrevious(1)}>
                        <a className="page-link" href="#c">Previous</a>
                    </li>
                    <li className={"page-item " + (currentPage === 1 ? "active" : "")} onClick={handleSelectedPage(1)}>
                        <a className="page-link" href="#c">1</a>
                    </li>
                    <li className={"page-item " + (currentPage === 2 ? "active" : "")}  onClick={handleSelectedPage(2)}>
                        <a className="page-link" href="#c">2</a>
                    </li>
                    <li className={"page-item " + (currentPage === 3 ? "active" : "")}  onClick={handleSelectedPage(3)}>
                        <a className="page-link" href="#c">3</a>
                        </li>
                    <li className={"page-item" + ( currentPage == 0? "disable":"")} onClick={handleNext(3)}>
                        <a className="page-link" href="#c">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
})