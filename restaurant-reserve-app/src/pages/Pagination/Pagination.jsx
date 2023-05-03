import { useState } from "react";
import "./Pagination.css"

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
  
    const handleClick = (page) => {
      setCurrentPage(page);
    }
  
    return (
      <nav className="pagination ms-5" aria-label="...">
        <ul className="pagination pagination-sm">
          <li className={`page-item ${currentPage === 1 ? 'active' : ''}`} aria-current="page">
            <span className="page-link" onClick={() => handleClick(1)}>1</span>
          </li>
          <li className={`page-item ${currentPage === 2 ? 'active' : ''}`}><a className="page-link" href="#" onClick={() => handleClick(2)}>2</a></li>
          <li className={`page-item ${currentPage === 3 ? 'active' : ''}`}><a className="page-link" href="#" onClick={() => handleClick(3)}>3</a></li>
        </ul>
      </nav>
    );
  }
  
  export default Pagination;