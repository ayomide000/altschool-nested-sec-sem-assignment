import React from "react";

const Paginations = ({ paginate, nPages, nextPage, prevPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <button className="page-link" onClick={{ prevPage }}>
            Previous
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button className="page-link" onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}
        <li className="page-item">
          <button className="page-link" onClick={{ nextPage }}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Paginations;
