import {BsStar, BsStarFill, BsStarHalf} from "react-icons/bs";

const Stars = ({ stars }) => {
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
        <div className="stars-icon d-flex align-items-center pe-2">
            {tempStars}
        </div>
    )
}

export default Stars