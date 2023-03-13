import { Fragment } from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const ProductStar = ({ stars }) => {
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
                {tempStars} <small className="text-muted">({stars})</small>
            </div>
        </Fragment>
    );
};

export default ProductStar;
