import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import withAuth from "../../components/hoc/withAuth";
import { useOrderContext } from "../../store/context/orderContext";
import ProfileNav from "../../components/profile/ProfileNav";
import Order from "../../components/profile/profileContent/order";
import { getOrders } from "../../lib/api/orders";
import { useUserContext } from "../../store/context/userContext";
import LoadingSpin from "../../components/ui/loading-spin";

const OrderPage = () => {
  const [loading, setLoading] = useState(false)
  const { getToOrders } = useOrderContext();
  const {myToken} = useUserContext()
  // const [status, setStatus] = useState("pending");

  // useEffect(() => {
  //   addToPendingOrders(status);
  // }, []);

  useEffect( () => {
    const fetchData = async () => {
      setLoading(true)
      const getOrdersRes = await getOrders(myToken)
      // any Error
      if (getOrdersRes.message) {
        getToOrders([], false, getOrdersRes.message)
        setLoading(false)
      }
      // if response is success
      if (getOrdersRes.status === 200) {
        const {data, success, message} = getOrdersRes.data
        getToOrders(data, success, message)
        setLoading(false)
      }
    }

    fetchData()
    // eslint-disable-next-line
  }, [myToken])

  if(loading) return <LoadingSpin/>

  

  return (
    <div className="help-center-page page">
      <section className="help-center-page-section page-section">
        <Container>
          <Row>
            <Col xl={3}>
              <ProfileNav />
            </Col>
            <Col xl={9}>
              <Order />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default withAuth(OrderPage);
