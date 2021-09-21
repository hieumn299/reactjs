import React from "react";
import RatingItem from "./RatingItem";

function RatingList(props) {
    const filterRating = (rating) => {
        props.filterRating(rating);
    };
    return (
        <ul
            className="rating-list d-flex align-items-center mt-3"
            onClick={() => {
                filterRating(props.ratings);
            }}
        >
            <RatingItem ratings={props.ratings}></RatingItem>
        </ul>
    );
}

export default RatingList;
