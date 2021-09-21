import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

function NavbarMain(props) {
    const handleSearchProduct = (e) => {
        props.handleSearchProduct(e.target.value);
    };
    return (
        <header>
            <Navbar>
                <Container>
                    <Navbar.Brand
                        href="#home"
                        className="d-flex align-items-center"
                    >
                        <img
                            src="https://community.algolia.com/instantsearch.js/v1/examples/e-commerce/logo-is.png"
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                        <span>amazing</span>
                    </Navbar.Brand>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                            onChange={handleSearchProduct}
                            value={props.filter.name_like}
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Container>
            </Navbar>
        </header>
    );
}

export default NavbarMain;
