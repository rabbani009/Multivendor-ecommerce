import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

export const tempStars = (average) =>
  Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;

    return (
      <span key={index}>
        {average >= index + 1 ? (
          <BsStarFill />
        ) : average >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
