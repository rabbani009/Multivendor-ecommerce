import { FaPlus, FaMinus } from "react-icons/fa";
import { Button, FormControl } from "react-bootstrap";

const AmountButtons = ({ amount, decrease, increase, stock }) => {

  return (
    <div className="amount-btns d-flex align-items-center">
      <div className="amount-btn-item d-flex">
        <Button
          variant="default"
          className="amount-btn d-flex align-items-center justify-content-center border-2 p-2"
          onClick={decrease}
          disabled={amount === 1}
        >
          <FaMinus />
        </Button>
      </div>

      <div className="amount-btn-item">
        <FormControl
          value={amount}
          className="amount-text text-center bg-transparent"
          onChange={(e) => console.log(e.currentTarget.value)}
        />
      </div>

      <div className="amount-btn-item d-flex">
        <Button
          variant="default"
          className="amount-btn d-flex align-items-center justify-content-center border-2 p-2"
          onClick={increase}
          disabled={amount === stock}
        >
          <FaPlus />
        </Button>
      </div>
    </div>
  );
};

export default AmountButtons;
