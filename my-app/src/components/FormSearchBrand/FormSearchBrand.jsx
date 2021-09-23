import React from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { useDispatch, useSelector } from "react-redux";
import { searchBrand } from "../../reducer/filter.slice";

function FormSearchBrand() {
    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => state.filter.searchBrand);
    const handleSearchBrand = (e) => {
        dispatch(searchBrand(e.target.value));
    };
    return (
        <Form className="d-flex py-2">
            <FormControl
                type="text"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                onChange={handleSearchBrand}
                value={searchTerm}
            />
        </Form>
    );
}

export default FormSearchBrand;
