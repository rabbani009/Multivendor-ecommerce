export const genPrice = (price, discount) => {
  let tempPrice = "";
  if (discount > 0) {
    tempPrice = discount;
  } else {
    tempPrice = price;
  }
  return <span className="price d-block">৳ {tempPrice}</span>;
};
