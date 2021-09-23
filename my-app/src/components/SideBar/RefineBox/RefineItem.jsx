import React from "react";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { changeType, changeBrand } from "../../../reducer/filter.slice";
import {
    changeTypeSidebar,
    changeBrandSidebar
} from "../../../reducer/sidebar.slice";

function RefineItem({ type, refineItem, active }) {
    const dispatch = useDispatch();
    const handleSetCheckBox = (e) => {
        if (type === "type") {
            dispatch(changeType(e.target.value));
            dispatch(changeTypeSidebar(e.target.value));
        } else if (type === "brand") {
            dispatch(changeBrand(e.target.value));
            dispatch(changeBrandSidebar(e.target.value));
        }
        // props.handleChangeRefine(e.target.value);
    };
    let item = refineItem;
    let id = item.id;
    return (
        <div className="refine-box__item d-flex py-2 align-items-center">
            <Form.Check
                onChange={handleSetCheckBox}
                type={"checkbox"}
                checked={active}
                id={id}
                label={item.item}
                className={"d-flex align-items-center"}
                value={item.item}
            />
        </div>
    );
}

export default RefineItem;
