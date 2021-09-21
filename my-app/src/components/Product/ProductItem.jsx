import React from "react";
import Card from "react-bootstrap/Card";
import RatingList from "../SideBar/RefineBox/Rating/RatingList";

function ProductItem(props) {
    const { name, image, rating, price } = props.product;
    return (
        <div className="col-3 mt-3">
            <Card className="p-3 product-item">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className="mt-3">{name}</Card.Title>
                    <div className="card-info d-flex align-items-center justify-content-between mt-3">
                        <div className="card-rating">
                            <RatingList ratings={rating}></RatingList>
                        </div>
                        <div className="card-price">
                            <span>${price}</span>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProductItem;
