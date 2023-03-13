import { useRouter } from "next/router";
import { Card, Col, Container, Row } from "react-bootstrap";

import { humanReadableDate } from "../../lib/helpers/human-readable-date";
import { generateEstimateDays } from "../../lib/helpers/generate-estimate-days";
import StepProgress from "../ui/step-progress";
import OrderDetailsItem from "./order-details-item";
import ShippingAddress from "./shipping-address";
import TotalSummary from "./total-summary";

const OrderDetails = ({order}) => {
  const router = useRouter()
  // const { order, errors } = props;

  // const {
  //   customer,
  //   orderId,
  //   orderItems,
  //   shipping_address,
  //   orderPrice,
  //   created_at,
  //   vendor,
  //   status
  // } = order;

  const {deliveryAddress, orderId, orderPlaceTime, orderStatus, orderStatusText, orderSummary, products} = order

  // if (errors) return <div>{errors}</div>;
  console.log('check oderStatus...', orderStatus)

  return (
    <div className="order-details-content">
      <div className="section-title py-2">
        <h4 className="mb-0 d-flex align-items-center text-capitalize">
          Order Details:
        </h4>
      </div>

      <div className="order-id-wrapper d-flex align-items-center justify-content-between px-4 py-2 my-2">
        <div>
          <p className="mb-0">
            <span className="text-capitalize">Order </span>
            <small className="text-muted">{`#${orderId || 'N/A'}`}</small>
          </p>
          <p className="mb-0">
            <small className="text-muted">
              place on {humanReadableDate(orderPlaceTime)}
            </small>
          </p>
        </div>
        <div>
          <p className="mb-0">
            <span className="text-capitalize">total: </span>
            <small className="text-muted">৳ {orderSummary?.total || 'N/A'}</small>
          </p>
        </div>
      </div>
      
      <div className="my-2">
        <Card className="order-card border-0">
          {/* <Card.header as="p" className="mb-0 px-4 py-2 bg-light">
            <span>Order status: </span>
            <small className="text-info">{ vendor?.shopName || "N/A" }</small>
          </Card.header> */}

          <Card.Header className="mb-0 px-4 py-2 bg-light">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <span>Order status: </span>
              </div>
              <div>
                <p className="mb-0">
                  <small className="text-info">{orderStatusText || 'N/A'}</small>
                </p>
              </div>
            </div>
          </Card.Header>



          <Card.Body className="px-4 py-2 pb-4">
            <div className="card-body-item">
              <p className="mb-0 text-success">
                Estimated Delivery By {humanReadableDate(orderPlaceTime)} -{" "}
                {generateEstimateDays(orderPlaceTime)}
              </p>
              {/* <div className="shipping-type">Cash on Delivery</div> */}
            </div>
            <div className="card-body-item py-4">
              <StepProgress status={orderStatus} />
            </div>
            {/* <div className="card-body-item py-2">
              <OrderDetailsItem products={products} />
            </div> */}
          </Card.Body>
        </Card>
      </div>


      <div className="my-2">
        <Card className="order-card border-0">
          <Card.Header className="mb-0 px-4 py-2 bg-light">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <span>Order products: </span>
              </div>
              <div>
                <p className="mb-0">
                  <span className="text-capitalize">total items: </span>
                  <small className="text-muted">{products.length}</small>
                </p>
              </div>
            </div>
          </Card.Header>
          <Card.Body className="px-4 py-2 pb-4">
            <div className="card-body-item py-2">
              <OrderDetailsItem products={products} />
            </div>
          </Card.Body>
        </Card>
      </div>


      <div className="shipping-card-section">
        <Container className="p-0">
          <Row>
            <Col lg={6}>
              <ShippingAddress deliveryAddress={deliveryAddress} />
            </Col>
            <Col lg={6}>
              <TotalSummary summary={orderSummary}/>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default OrderDetails;
