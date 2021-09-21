import React from "react";
import ContentNav from "../ContentNav/ContentNav";
import Pagination from "../Pagination/Pagination";
import ProductList from "../Product/ProductList";

function ContentResult(props) {
    const handlePageChange = (filter) => {
        props.handlePageChange(filter);
    };

    const handleChangeSort = (value) => {
        props.handleChangeSort(value);
    };
    return (
        <div className="content-result">
            <div className="content-nav">
                <ContentNav
                    handleChangeSort={handleChangeSort}
                    filter={props.filter}
                ></ContentNav>
            </div>
            <ProductList
                productsWithParams={props.productsWithParams}
            ></ProductList>
            {props.totalCount > 0 ? (
                <div className="pagination-main py-4 d-flex align-items-center justify-content-center mt-5">
                    <Pagination
                        totalCount={props.totalCount}
                        filter={props.filter}
                        handlePageChange={handlePageChange}
                    ></Pagination>
                </div>
            ) : (
                ""
            )}
        </div>
    );
}

export default ContentResult;
