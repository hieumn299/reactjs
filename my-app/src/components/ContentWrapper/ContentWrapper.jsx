import React from "react";
import SideBar from "../SideBar/SideBar";
import ContentResult from "../ContentResult/ContentResult";

function ContentWrapper(props) {
    const handlePageChange = (filter) => {
        props.handlePageChange(filter);
    };
    const handleChangeCategories = (query) => {
        props.handleChangeCategories(query);
    };
    const handleChangeType = (type) => {
        props.handleChangeType(type);
    };
    const handleChangeBrand = (brand) => {
        props.handleChangeBrand(brand);
    };
    const handleChangeRating = (ratings) => {
        props.handleChangeRating(ratings);
    };
    const handlePrice = (start, end) => {
        props.handlePrice(start, end);
    };
    const handleSearchBrand = (term) => {
        props.handleSearchBrand(term);
    };

    const handleChangeSort = (value) => {
        props.handleChangeSort(value);
    };

    const handleSearchPrice = (data) => {
        props.handleSearchPrice(data);
    };

    const handleClearFilter = (stt) => {
        props.handleClearFilter(stt);
    };
    return (
        <div className="d-flex content-wrapper">
            <SideBar
                handleChangeCategories={handleChangeCategories}
                productsAll={props.productsAll}
                handleChangeType={handleChangeType}
                handleChangeBrand={handleChangeBrand}
                handleChangeRating={handleChangeRating}
                handlePrice={handlePrice}
                handleSearchBrand={handleSearchBrand}
                filter={props.filter}
                handleSearchPrice={handleSearchPrice}
                handleClearFilter={handleClearFilter}
            ></SideBar>
            <ContentResult
                productsWithParams={props.productsWithParams}
                totalCount={props.totalCount}
                filter={props.filter}
                handlePageChange={handlePageChange}
                handleChangeSort={handleChangeSort}
            ></ContentResult>
        </div>
    );
}

export default ContentWrapper;
