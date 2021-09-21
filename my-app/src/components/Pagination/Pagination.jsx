import React from "react";
import ReactPaginate from "react-paginate";

function Pagination(props) {
    const { totalCount, filter } = props;
    const totalPage = Math.ceil(totalCount / filter["_limit"]);
    const handlePageChange = (e) => {
        props.handlePageChange(e.selected + 1);
    };
    return (
        <ReactPaginate
            pageCount={totalPage}
            onPageChange={handlePageChange}
            forcePage={filter._page - 1}
        ></ReactPaginate>
    );
}

export default Pagination;
