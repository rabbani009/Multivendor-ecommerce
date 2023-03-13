import { Col } from "react-bootstrap";

import PackageList from "./package-list";

const PackageItem = (props) => {
  const { _package } = props;
  const { packageId, products, shippingCharge, shopLogo, shopName, totalItem } =
    _package;

  return (
    <Col className="mb-3">
      <div className="shop p-4">
        <div className="shop-header mb-2">
          Shop Name:{" "}
          <strong className="text-muted text-capitalize">{shopName}</strong>
        </div>
        {products &&
          products.map((product) => {
            return (
              <PackageList
                key={product.id}
                packageId={packageId}
                product={product}
              />
            );
          })}
      </div>
    </Col>
  );
};

export default PackageItem;
