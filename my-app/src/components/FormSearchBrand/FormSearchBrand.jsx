import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

function FormSearchBrand(props) {
    const [searchTerm, setSearchTerm] = useState("");
    const handleSearchBrand = (e) => {
        setSearchTerm(e.target.value);
        props.handleSearchBrand(e.target.value);
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
