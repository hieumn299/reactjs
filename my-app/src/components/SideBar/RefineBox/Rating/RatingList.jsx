import React from "react";
import { useDispatch } from "react-redux";
import RatingItem from "./RatingItem";
import { changeRating } from "../../../../reducer/filter.slice";

function RatingList({ ratings }) {
    const dispatch = useDispatch();
    const filterRating = (rating) => {
        dispatch(changeRating(rating));
        // props.filterRating(rating);
    };
    return (
        <ul
            className="rating-list d-flex align-items-center mt-3"
            onClick={() => {
                filterRating(ratings);
            }}
        >
            <RatingItem ratings={ratings}></RatingItem>
        </ul>
    );
}

export default RatingList;
