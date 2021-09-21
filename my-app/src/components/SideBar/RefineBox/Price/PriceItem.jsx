import React from "react";

function PriceItem(props) {
    const handlePrice = (start, end) => {
        props.handlePrice(start, end);
        props.itemActive(props.price.title);
    };
    return (
        <div
            className={`price-item py-1 ${props.active ? "active" : ""}`}
            onClick={() => handlePrice(props.price.start, props.price.end)}
        >
            <a
                href="#/"
                className="price-link"
                start={props.price.start}
                end={props.price.end}
            >
                <div>{props.price.title}</div>
            </a>
        </div>
    );
}

export default PriceItem;
