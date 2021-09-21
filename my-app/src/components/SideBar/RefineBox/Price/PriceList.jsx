import React, { useState } from "react";
import priceList from "../../../../variable";
import PriceItem from "./PriceItem";

function PriceList(props) {
    const [itemActive, setItemActive] = useState("");
    if (props.isClear && itemActive !== "") {
        setItemActive("");
    }
    const setActive = (item) => {
        if (itemActive === item) {
            setItemActive("");
        } else {
            setItemActive(item);
        }
    };
    const renderPriceItem = () => {
        const handlePrice = (start, end) => {
            props.handlePrice(start, end);
        };
        let result = priceList.map((item) => {
            return (
                <PriceItem
                    handlePrice={handlePrice}
                    price={item}
                    key={item.title}
                    itemActive={setActive}
                    active={item.title === itemActive ? true : false}
                ></PriceItem>
            );
        });
        return result;
    };
    return <>{renderPriceItem()}</>;
}

export default PriceList;
