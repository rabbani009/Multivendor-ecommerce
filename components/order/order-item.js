import { Col } from "react-bootstrap";
import OrderList from "./order-list";

const OrderItem = (props) => {
  const { id, order_items, status, grantTotal, orderId, date, order } = props;

  return (
    <Col className="mb-3">
      <div className="item p-4">
        <div className="item-body">
          {order_items && order_items.length === 0 ? (
            <OrderList
              id={id}
              date={date}
              grantTotal={grantTotal}
              status={status}
              image={order.image}
              orderId={orderId}
              price={order.price}
              productTitle={order.productTitle}
              quantity={order.quantity}
            />
          ) : (
            order_items.map((item, index) => {
              const { image, price, productTitle, quantity } = item;
              return (
                <OrderList
                  id={id}
                  date={date}
                  grantTotal={grantTotal}
                  status={status}
                  image={image}
                  orderId={orderId}
                  price={price}
                  productTitle={productTitle}
                  quantity={quantity}
                  key={index}
                />
              );
            })
          )}
        </div>
      </div>
    </Col>
  );
};
export default OrderItem;
