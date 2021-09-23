import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../reducer/filter.slice";

function Pagination() {
    const dispatch = useDispatch();
    const totalProducts = useSelector((state) => state.totalPage);
    const filter = useSelector((state) => state.filter);
    const totalPage = Math.ceil(totalProducts.totalPage / filter._limit);
    const handlePageChange = (e) => {
        dispatch(changePage(e.selected + 1));
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
