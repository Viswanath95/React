import React from 'react';

function Pagination( props ) {
    const pageLinks = [];

    for(let i=0; i<=1; i++) {
        //let active = props.currentPage === i ? 'active' : '';
        pageLinks.push(<li key={i} onClick={() => props.nextPage(i)}><a href="#">{i}</a></li>)
    }
    return(
        <div>
            {props.currentPage > 0 ? <li onClick={() => props.nextPage(props.currentPage - 1)}><a href="#">Prev</a></li> : '' }
            {pageLinks}
            {props.currentPage <= 1 ? <li onClick={() => props.nextPage(props.currentPage + 1)}><a href="#">Next</a></li> : '' }
        </div>
    )
}

export default Pagination;