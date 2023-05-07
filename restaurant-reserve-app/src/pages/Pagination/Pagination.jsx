import { useState } from "react";
import "./Pagination.css"

const Pagination = ({ page, onPageChange }) => {
  
    const handleClick = (page) => {
      onPageChange(page);
    }
  
    return (
      <nav className="pagination ms-5" aria-label="...">
        <ul className="pagination pagination-sm">
          <li className={`page-item ${page === 1 ? 'active' : ''}`} aria-current="page">
            <span className="page-link" onClick={() => handleClick(1)}>1</span>
          </li>
          <li className={`page-item ${page === 2 ? 'active' : ''}`}><a className="page-link" href="#" onClick={() => handleClick(2)}>2</a></li>
          <li className={`page-item ${page === 3 ? 'active' : ''}`}><a className="page-link" href="#" onClick={() => handleClick(3)}>3</a></li>
        </ul>
      </nav>
    );
  }
  
  export default Pagination;