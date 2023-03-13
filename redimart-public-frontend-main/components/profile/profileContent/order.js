import { Tab, Tabs } from "react-bootstrap";

import { useOrderContext } from "../../../store/context/orderContext";
// import PendingOrders from "../../order/pending-orders";
// import CancelOrders from "../../order/cancel-orders";
// import PayOrders from "../../order/pay-orders";
// import LoadingSpin from "../../ui/loading-spin";
import OrderTable from "../../order/order-table";

const Order = () => {
  const {orders} = useOrderContext()
  // const { data } = orders;
  // const { status, setStatus } = props;
  // console.log('check loading...', loading)

  // if(props.loading) return <LoadingSpin/>


  return (
    <div className="order-content page-content p-4">
      <OrderTable orders={orders}/>
      {/* <Tabs
        id="order-tab"
        activeKey={status}
        onSelect={(k) => setStatus(k)}
        className="mb-3"
      >
        <Tab eventKey="pending" title="Pending">
          <PendingOrders loading={loading} errors={errors} orders={data} />
        </Tab>
        <Tab eventKey="cancel" title="Cancel order">
          <CancelOrders loading={loading} errors={errors} orders={data} />
        </Tab>
        <Tab eventKey="pay" title="Pay">
          <PayOrders loading={loading} errors={errors} orders={data} />
        </Tab>
      </Tabs> */}
    </div>
  );
};

export default Order;
