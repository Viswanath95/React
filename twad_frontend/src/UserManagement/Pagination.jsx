import React from 'react';

function Pagination({currentPage, nextPage, perPage, searchTerm, endPage}) {
    const pageLinks = [];

    for(let i=currentPage; i <= endPage; i++) {
        //let active = props.currentPage === i ? 'active' : '';
        pageLinks.push(<li onClick={() => nextPage(i, perPage, searchTerm)}><a href="#">{i}</a></li>)
    }
    
    return(
        <div>
            {currentPage > 1 ? <li onClick={() => nextPage(currentPage - 1, perPage, searchTerm)}><a href="#">Prev</a></li> : '' }
            {pageLinks}
            {currentPage <= endPage ? <li onClick={() => nextPage(currentPage + 1, perPage, searchTerm)}><a href="#">Next</a></li> : '' }
        </div>
    )
}

export default Pagination;