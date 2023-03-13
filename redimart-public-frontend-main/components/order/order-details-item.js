import { Fragment } from "react";
import OrderDetailsList from "./order-details-list";

const OrderDetailsItem = ({products}) => {
  // console.log('check products...', products)
  // if (props.orderItems.length === 0) {
  //   return <div className="text-center">Order item not found!</div>;
  // }

  // return <h1>Hello world</h1>

  return (
    <Fragment>
      {products.map((product) => (
          <OrderDetailsList product={product} key={product.id} />
        ))}
    </Fragment>
  );
};

export default OrderDetailsItem;
