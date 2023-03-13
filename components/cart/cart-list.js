import Image from "next/image";
import { Button, Card } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

import { useUserContext } from "../../store/context/userContext";
import { useCartContext } from "../../store/context/cartContext";

const CartList = (props) => {
  const { myToken } = useUserContext();
  const { removeToCart } = useCartContext();

  const { image, title, price, quantity, value, id, packageId } = props;

  return (
    <Card className="py-3 my-2 px-4 cart-list-card">
      <Card.Body className="p-0 d-flex">
        <div className="card-body-item pe-5">
          <Image src={`${image}_140x140.png`} width={140} height={140} alt={title} />
        </div>

        <div className="card-body-item d-flex align-items-center justify-content-between w-100 pe-5">
          <div className="cart-product-description d-flex flex-column">
            <div className="cart-product-description-item title text-capitalize mb-2">
              {title}
            </div>
            <div className="cart-product-description-item">
              Price: <span className="price">BDT {price}</span>
            </div>
            <div className="cart-product-description-item">
              Quantity: <span className="quantity">{quantity}</span>
            </div>
            <div>
              {value &&
                value.map((item, item_index) => {
                  return (
                    <div
                      className="d-flex align-items-center cart-product-description-item"
                      key={item_index}
                    >
                      <div className="text-capitalize">
                        {item.skuPropertyName}:{" "}
                      </div>
                      <span className={`${item.skuPropertyName} ms-1`}>
                        {item.propertyValueName}
                      </span>
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="cart-delete-btn-wrapper">
            <Button
              variant="danger"
              onClick={() => removeToCart(packageId, id, myToken)}
            >
              <FaTrash />
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CartList;
