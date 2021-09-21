import React from "react";
import Form from "react-bootstrap/Form";

function RefineItem(props) {
    const handleSetCheckBox = (e) => {
        props.handleChangeRefine(e.target.value);
    };
    let item = props.refineItem;
    let id = item.id;
    return (
        <div className="refine-box__item d-flex py-2 align-items-center">
            <Form.Check
                onChange={handleSetCheckBox}
                type={"checkbox"}
                checked={props.active}
                id={id}
                label={item.item}
                className={"d-flex align-items-center"}
                value={item.item}
            />
        </div>
    );
}

export default RefineItem;
