import React from "react";

const renderRating = (star) => {
    let rating = [];
    for (let i = 1; i <= Number(star); i++) {
        rating.push(
            <li key={i} className="rating-item">
                <i className="fas fa-star"></i>
            </li>
        );
    }
    for (let j = 1; j <= 5 - star; j++) {
        rating.push(
            <li key={j + 6} className="rating-item">
                <i className="far fa-star"></i>
            </li>
        );
    }
    return rating;
};

function RatingItem(props) {
    return <>{renderRating(props.ratings)}</>;
}

export default RatingItem;
