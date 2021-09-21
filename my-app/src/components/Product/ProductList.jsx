import React from "react";
import ProductItem from "./ProductItem";

function ProductList(props) {
    const { productsWithParams } = props;
    const renderProductItem = (data) => {
        if (data.length > 0) {
            let result = data.map((item, index) => {
                return <ProductItem key={index} product={item}></ProductItem>;
            });
            return result;
        } else {
            return <span className="product-message">No result </span>;
        }
    };
    return (
        <div className="product-list">
            <div className="row">{renderProductItem(productsWithParams)}</div>
        </div>
    );
}

export default ProductList;
