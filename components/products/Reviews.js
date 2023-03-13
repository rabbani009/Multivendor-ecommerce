import Stars from "./Stars";
import Orders from "./Orders";

const Reviews = ({ reviews, order }) => {

  return (
    <div className="product-review-wrapper d-flex">
      <Stars stars={reviews.avarage} reviews={reviews.totalRating} />
      <Orders order={order} />
    </div>
  );
};

export default Reviews;
