import React from "react";
import Form from "react-bootstrap/Form";

function ContentNav(props) {
    const handleChangeSort = (e) => {
        props.handleChangeSort(e.target.value);
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
                    onChange={handleChangeSort}
                >
                    <option value="asc">Price Asc.</option>
                    <option value="desc">Price Desc.</option>
                </Form.Select>
            </div>
        </div>
    );
}

export default ContentNav;
