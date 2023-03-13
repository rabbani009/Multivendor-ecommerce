import AmountButtons from "./AmountButtons";

const Quantity = ({ amount, handleIncrease, handleDecrease, stock }) => {
  return (
    <div className="quantity-wrapper d-flex align-items-center py-2">
      <div className="quantity-heading pe-3">
        <h5 className="mb-0">Quantity: </h5>
      </div>
      <div className="quantity-body">
        <AmountButtons
          stock={stock}
          amount={amount}
          increase={handleIncrease}
          decrease={handleDecrease}
        />
      </div>
      <div className="d-flex align-items-center ps-3">
        <p className="mb-0">{stock === 0 ? 'Out of stock!!' : `${stock} items available`}</p>
      </div>

    </div>
  );
};

export default Quantity;
