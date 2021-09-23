import React from "react";
import { useDispatch } from "react-redux";
import { changePrice } from "../../../../reducer/filter.slice";

function PriceItem({ itemActive, price, active }) {
    const dispatch = useDispatch();
    const handlePrice = (price) => {
        dispatch(changePrice(price));
        // props.handlePrice(start, end);
        itemActive(price.title);
    };
    return (
        <div
            className={`price-item py-1 ${active ? "active" : ""}`}
            onClick={() => handlePrice(price)}
        >
            <a
                href="#/"
                className="price-link"
                start={price.start}
                end={price.end}
            >
                <div>{price.title}</div>
            </a>
        </div>
    );
}

export default PriceItem;
