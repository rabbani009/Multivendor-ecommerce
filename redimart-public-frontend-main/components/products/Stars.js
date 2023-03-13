import React, { Fragment } from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <Fragment>
      <div className="stars-icon d-flex align-items-center pe-2">
        {tempStars}
      </div>
      <div className="reviews-wrapper d-flex align-items-center pe-3">
        <p className="review-text mb-0">{reviews} reviews</p>
      </div>
    </Fragment>
  );
};

export default Stars;
