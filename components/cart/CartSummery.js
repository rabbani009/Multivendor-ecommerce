import { Button } from "react-bootstrap";

const CartSummery = (props) => {
  const {
    total,
    subTotal,
    grandTotal,
    shippingFee,
    btnName,
    onHandleBtn,
    isSelect,
  } = props;

  return (
    <div className="cart-summery-wrapper p-4">
      <div className="cart-summery-title text-center py-2">
        <h6 className="mb-0">Cart Summery</h6>
      </div>
      <hr />
      <div className="cart-summery-body p-2">
        <div className="w-75">
          <div className="cart-summery-item d-flex align-items-center justify-content-between my-1">
            Total: <small>{total}</small>
          </div>
          <div className="cart-summery-item d-flex align-items-center justify-content-between my-1">
            Subtotal: <small>{subTotal}</small>
          </div>
          <div className="cart-summery-item d-flex align-items-center justify-content-between my-1">
            Shipping fee: <small>BDT {shippingFee}</small>
          </div>
          <hr />
          <div className="cart-summery-item d-flex align-items-center justify-content-between my-1">
            Grand total: <small>BDT {grandTotal}</small>
          </div>
        </div>
      </div>

      <div className="cart-summery-footer text-end">
        <Button
          onClick={onHandleBtn}
          size="sm"
          variant="primary"
          className="w-100"
          disabled={btnName === "PROCEED TO PAY" && !isSelect ? "disabled" : ""}
        >
          {btnName}
        </Button>
      </div>
    </div>
  );
};

export default CartSummery;
