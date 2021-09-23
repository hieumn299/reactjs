import React from "react";
import { useSelector } from "react-redux";
import ContentNav from "../ContentNav/ContentNav";
import Pagination from "../Pagination/Pagination";
import ProductList from "../Product/ProductList";

function ContentResult() {
    const totalCount = useSelector((state) => state.totalPage.totalPage);
    return (
        <div className="content-result">
            <div className="content-nav">
                <ContentNav></ContentNav>
            </div>
            <ProductList></ProductList>
            {totalCount > 0 ? (
                <div className="pagination-main py-4 d-flex align-items-center justify-content-center mt-5">
                    <Pagination></Pagination>
                </div>
            ) : (
                ""
            )}
        </div>
    );
}

export default ContentResult;
