import { BsFillBagCheckFill } from "react-icons/bs";

const Orders = ({ order }) => {
  return (
    <div className="orders-wrapper d-flex align-items-center">
      <BsFillBagCheckFill className="cart-icon pe-1" />
      <span>{order} orders</span>
    </div>
  );
};

export default Orders;
