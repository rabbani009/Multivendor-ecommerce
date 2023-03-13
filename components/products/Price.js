import { Fragment } from "react";

const Price = (props) => {
  const { price, productPrice, discountPrice, discountPercent } = props;

  return (
    <div className="price-wrapper d-flex align-items-center">
      <div>
        <span className="main-price d-block">৳ {price}</span>
      </div>
      <div>
        {
          discountPrice > 0 ? (
            <Fragment>
              <small className="price text-decoration-line-through text-muted">৳{productPrice}</small>
              <small className="price text-black"> -{discountPercent}%</small>
            </Fragment>
          ) : null
        }
      </div>
    </div>
  );
};

export default Price;
