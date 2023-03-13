import { tempStars } from "../../lib/helpers/reviews";
import Stars from "../products/Stars";

const Reviews = ({ review }) => {
  const { avarage, ratingStarInfo, totalRating } = review;

  return (
    <div className="review-wrapper py-3">
      {/*<div className="review-title d-flex flex-column flex-md-row justify-content-around mb-2">*/}
      {/*  <p className="my-1 text-size-sm">Based on {totalRating} reviews</p>*/}
      {/*  <p className="my-1 text-size-sm">*/}
      {/*    Only logged in customers who have purchased this product may leave a*/}
      {/*    review.*/}
      {/*  </p>*/}
      {/*</div>*/}
      <div className="review-body d-flex align-items-center">
        <div className="average-review-wrapper d-flex flex-sm-column px-5 mb-2">
          <span className="average-review text-size-xlll">
            {avarage} <small className="text-size-xl text-muted">/5</small>
          </span>
          {/*<small className="text-size-xs text-muted">{totalRating} Average ratings</small>*/}

          <Stars stars={avarage} reviews={totalRating}/>
        </div>
        <div className="rating-histogram">
          {/*{ratingStarInfo &&*/}
          {/*  ratingStarInfo.map((item) => {*/}
          {/*    console.log(item[3]);*/}
          {/*  })}*/}
          <div className="rating-bar d-flex align-items-center my-1">
            <div className="star-rating d-flex me-3">{tempStars(5)}</div>
            <div className="rating-percentage-bar w-25 me-3" >
              <div className="bg-wh"></div>
              <div className="bg-warn" style={{ width: "100%"}}></div>
            </div>
            <small className="rating-count text-muted">100</small>
          </div>

          <div className="rating-bar d-flex align-items-center my-1">
            <div className="star-rating d-flex me-3">{tempStars(4)}</div>
            <div className="rating-percentage-bar w-25 me-3">
              <div className="bg-wh"></div>
              <div className="bg-warn" style={{ width: "80%"}}></div>
            </div>
            <small className="rating-count text-muted">80</small>
          </div>

          <div className="rating-bar d-flex align-items-center my-1">
            <div className="star-rating d-flex me-3">{tempStars(3)}</div>
            <div className="rating-percentage-bar w-25 me-3">
              <div className="bg-wh"></div>
              <div className="bg-warn" style={{ width: "60%"}}></div>
            </div>
            <small className="rating-count text-muted">60</small>
          </div>

          <div className="rating-bar d-flex align-items-center my-1">
            <div className="star-rating d-flex me-3">{tempStars(2)}</div>
            <div className="rating-percentage-bar w-25 me-3">
              <div className="bg-wh"></div>
              <div className="bg-warn" style={{ width: "40%"}}></div>
            </div>
            <small className="rating-count text-muted">40</small>
          </div>

          <div className="rating-bar d-flex align-items-center my-1">
            <div className="star-rating d-flex me-3">{tempStars(1)}</div>
            <div className="rating-percentage-bar w-25 me-3">
              <div className="bg-wh"></div>
              <div className="bg-warn" style={{ width: "20%"}}></div>
            </div>
            <small className="rating-count text-muted">20</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
