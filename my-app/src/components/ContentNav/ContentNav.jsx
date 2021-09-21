import React from "react";
import Form from "react-bootstrap/Form";

function ContentNav({ filter, handleChangeSort }) {
    const handleSort = (e) => {
        handleChangeSort(e.target.value);
    };
    return (
        <div className="d-flex align-items-center justify-content-end">
            <div className="input-sort d-flex align-items-center">
                <Form.Label
                    htmlFor="sortbySelect"
                    className="text-nowrap mx-3 mb-0"
                >
                    Sort by
                </Form.Label>
                <Form.Select
                    className="me-sm-2"
                    id="sortbySelect"
                    onChange={handleSort}
                    value={filter._order}
                >
                    <option value="asc">Price Asc.</option>
                    <option value="desc">Price Desc.</option>
                </Form.Select>
            </div>
        </div>
    );
}

export default ContentNav;
