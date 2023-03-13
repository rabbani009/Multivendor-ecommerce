import { Badge } from "react-bootstrap";

const TotalSummary = ({ summary }) => {
  // console.log('check order summary...', summary)

  const {shippingFee, subtotal, total } = summary

  return (
    <div className="total-summary px-4 py-2">
      <div className="total-summary-title">
        <p className="mb-0 text-capitalize">Total Summary</p>
      </div>
      <div className="total-summary-body">
        <div>
          <div className="d-flex align-items-center justify-content-between">
            <small className="text-capitalize">Subtotal</small>
            <small>৳: {subtotal}</small>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <small className="text-capitalize">Shipping fee</small>
            <small>৳: {shippingFee}</small>
          </div>
        </div>

        <hr className="line my-3" />
        <div>
          <div className="d-flex align-items-center justify-content-between pb-4">
            <small className="text-capitalize">total</small>
            <small>৳: {total}</small>
          </div>

          <div className="d-flex align-items-center justify-content-between">
            <small className="text-capitalize text-muted">
              <Badge bg={`primary`} className="me-2">
                {"Paid"}
              </Badge> 
              by cash on delivery
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalSummary;
