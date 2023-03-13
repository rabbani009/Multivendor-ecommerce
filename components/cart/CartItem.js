import { Row } from "react-bootstrap";

import PackageItem from "./package-item";

const CartItem = (props) => {
  const { packages } = props;

  return (
    <div className="cart-item-wrapper">
      <Row className="flex-column">
        {packages &&
          packages.map((_package) => {
            if (_package.products.length === 0) return;
            return <PackageItem key={_package.packageId} _package={_package} />;
          })}
      </Row>
    </div>
  );
};

export default CartItem;
