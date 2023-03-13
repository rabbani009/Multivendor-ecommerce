import LoadingSpin from "../ui/loading-spin";
import OrderItemList from "./order-item-list";

const CancelOrders = (props) => {
  const { loading, orders, errors } = props;

  if (loading) return <LoadingSpin />;
  if (errors) return <div>{errors}</div>;
  if (!orders || orders.length === 0)
    return <div className="text-center my-5">No cancel orders yet!</div>;

  return <OrderItemList orders={orders} />;
};

export default CancelOrders;
