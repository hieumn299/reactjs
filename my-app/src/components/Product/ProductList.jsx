import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

function ProductList() {
    const products = useSelector((state) => state.products.products);
    const renderProductItem = (data) => {
        if (data.length > 0) {
            let result = data.map((item) => {
                return (
                    <ProductItem
                        key={item.objectID}
                        product={item}
                    ></ProductItem>
                );
            });
            return result;
        } else {
            return <span className="product-message">No result </span>;
        }
    };
    return (
        <div className="product-list">
            <div className="row">{renderProductItem(products)}</div>
        </div>
    );
}

export default ProductList;
