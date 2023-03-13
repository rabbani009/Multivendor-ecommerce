import {useEffect, useState} from "react"
import { useRouter } from "next/router";
import { Col, Container, Row } from "react-bootstrap";

import { useOrderContext } from "../../store/context/orderContext";
import { useUserContext } from "../../store/context/userContext";
import ProfileNav from "../../components/profile/ProfileNav";
import OrderDetails from "../../components/order/order-details";
import withAuth from "../../components/hoc/withAuth";
import LoadingSpin from "../../components/ui/loading-spin";
import { getOrder } from "../../lib/api/orders";
import { isEmpty } from "../../lib/helpers";

const OrderDetailsPage = () => {
  const {token} = useUserContext()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [order, setOrder] = useState({})
  
  // const { order, errors } = useOrderContext();
  // console.log('check order...', order)

  // if (errors) return <div>{errors}</div>;

  useEffect( () => {
    const fetchData = async () => {
      setLoading(true)
      const orderRes = await getOrder(token, router.query.orderId)
      if (orderRes.status === 200) {
        const {data, success, message} = orderRes.data
        if (success) {
          setOrder(data)
          setLoading(false)
        }
      }
      setLoading(false)
    }
    fetchData()
  },[token, router.query.orderId])


  if (loading) return <LoadingSpin/>
  if(isEmpty(order)) return <div>No order found!</div>
  

  return (
    <div className="order-details-page page">
      <section className="order-details-page-section page-section">
        <Container>
          <Row>
            <Col xl={3}>
              <ProfileNav />
            </Col>
            <Col xl={9}>
              <OrderDetails order={order}/>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default withAuth(OrderDetailsPage);
