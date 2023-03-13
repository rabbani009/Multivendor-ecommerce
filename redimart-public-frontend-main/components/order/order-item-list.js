import { Row } from "react-bootstrap";
import OrderItem from "./order-item";

const OrderItemList = (props) => {
  const { orders } = props;
  return (
    <div className="order-item-wrapper">
      <Row className="flex-column">
        {orders &&
          orders.map((order, index) => {
            const { id, orderId, orderPrice, order_items, status, created_at } =
              order;

            return (
              <OrderItem
                order={order}
                id={id}
                date={created_at}
                orderId={orderId}
                grantTotal={orderPrice}
                order_items={order_items}
                status={status}
                key={index}
              />
            );
          })}
      </Row>
    </div>
  );
};

export default OrderItemList;
