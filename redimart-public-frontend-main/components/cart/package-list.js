import CartList from "./cart-list";

const PackageList = (props) => {
  const { packageId, product } = props;
  const {
    id,
    productImage,
    productTitle,
    orginalPrice,
    quantity,
    attribute: { value },
  } = product;

  return (
    <div className="shop-body">
      <CartList
        id={id}
        packageId={packageId}
        image={productImage}
        title={productTitle}
        price={orginalPrice}
        quantity={quantity}
        value={value}
      />
    </div>
  );
};

export default PackageList;
