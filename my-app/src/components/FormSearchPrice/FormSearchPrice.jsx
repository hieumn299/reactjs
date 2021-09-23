import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch } from "react-redux";
import { changePriceInput } from "../../reducer/filter.slice";

function FormSearchPrice({ isClear }) {
    const dispatch = useDispatch();
    const [price, setPrice] = useState({
        start: "",
        end: ""
    });
    if (isClear && price.start !== "" && price.end !== "") {
        setPrice({
            start: "",
            end: ""
        });
    }
    const handlePriceStart = (e) => {
        if (e.target.value >= 1) {
            setPrice({
                ...price,
                start: Number(e.target.value)
            });
        } else {
            setPrice({
                ...price,
                start: 1
            });
        }
    };

    const handlePriceEnd = (e) => {
        if (e.target.value <= 1) {
            setPrice({
                ...price,
                end: 1
            });
        } else {
            setPrice({
                ...price,
                end: Number(e.target.value)
            });
        }
    };

    const handleSubmitPrice = (e) => {
        e.preventDefault();
        dispatch(changePriceInput(price));
    };
    return (
        <Form className="py-3" onSubmit={handleSubmitPrice}>
            <Row className="align-items-center">
                <Col sm={4}>
                    <Form.Group
                        as={Row}
                        controlId="formSearchPriceStart"
                        className="flex-nowrap"
                    >
                        <Form.Label column sm={1}>
                            $
                        </Form.Label>
                        <Col sm={11}>
                            <Form.Control
                                type="number"
                                value={isClear ? "" : price.start}
                                onChange={handlePriceStart}
                            />
                        </Col>
                    </Form.Group>
                </Col>
                <Col sm={1}>
                    <span>to</span>
                </Col>
                <Col sm={4}>
                    <Form.Group
                        as={Row}
                        className="flex-nowrap"
                        controlId="formSearchPriceEnd"
                    >
                        <Form.Label column sm={1}>
                            $
                        </Form.Label>
                        <Col sm={11}>
                            <Form.Control
                                type="number"
                                value={isClear ? "" : price.end}
                                onChange={handlePriceEnd}
                            />
                        </Col>
                    </Form.Group>
                </Col>
                <Col sm={3}>
                    <button
                        type="submit"
                        className="px-2 py-2 btn-primary rounded-circle"
                    >
                        Go
                    </button>
                </Col>
            </Row>
        </Form>
    );
}

export default FormSearchPrice;
