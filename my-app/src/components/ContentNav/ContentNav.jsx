import React from "react";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { changeSort } from "../../reducer/filter.slice";

function ContentNav() {
    const dispatch = useDispatch();
    const handleChangeSort = (e) => {
        dispatch(changeSort(e.target.value));
    };
    const defaultSort = useSelector((state) => state.filter._order);
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
                    value={defaultSort}
                >
                    <option value="asc">Price Asc.</option>
                    <option value="desc">Price Desc.</option>
                </Form.Select>
            </div>
        </div>
    );
}

export default ContentNav;
