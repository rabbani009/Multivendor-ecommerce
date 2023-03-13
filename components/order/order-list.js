import Link from "next/link";
import Image from "next/image"
import { Card } from "react-bootstrap";
// import { useOrderContext } from "../../store/context/orderContext";
import { humanReadableDate } from "../../lib/helpers/human-readable-date";

const OrderList = (props) => {
  // const { addToOrder } = useOrderContext();

  const {
    id,
    image,
    price,
    orderId,
    productTitle,
    quantity,
    status,
    grantTotal,
    date,
  } = props;

  return (
    <Card className="py-3 my-2 px-4 order-list-card">
      <div className="card-title mb-0">
        <div className="title-item d-flex align-items-end justify-content-between">
          <div>
            {/*<p className="mb-0" onClick={() => addToOrder(id)}>*/}
            {/*  Order: <Link href={`order/${id}`}>{orderId}</Link>*/}
            {/*</p>*/}
            <p className="mb-0">
              Order: <Link href={`order/${id}`}>{orderId}</Link>
            </p>
            <p className="mb-0">
              <span>Place on: </span>
              <small>{humanReadableDate(date)}</small>
            </p>
          </div>
          <div>
            <p className="mb-0">
              <span className="text-capitalize">status: </span>
              <small className={status === "pending" ? "text-danger" : ""}>
                {status}
              </small>
            </p>
          </div>
        </div>
      </div>
      <Card.Body className="px-0">
        <div className="body-item d-flex align-items-start">
          <div className="pe-4">
            {/*<img src={image} alt={productTitle} />*/}
            <Image src={image} alt={productTitle} width={100} height={100} layout="responsive" priority/>
          </div>
          <div className="w-100">
            <p className="mb-2">{productTitle}</p>
            <p className="mb-0">
              <span className="text-capitalize">Price: </span>
              <small className="text-muted">{price}</small>
            </p>
            <p className="mb-0">
              <span className="text-capitalize">Quantity: </span>
              <small className="text-muted">{quantity}</small>
            </p>
          </div>
        </div>
      </Card.Body>
      <div className="card-footer bg-transparent px-0">
        <div className="footer-item">
          <div>
            <p className="mb-0">
              <span>grant total: </span>
              <small>{grantTotal}</small>
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default OrderList;
