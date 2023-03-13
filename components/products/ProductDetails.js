import { Fragment, useState } from "react";

// import { Button, Modal } from "react-bootstrap";

// import { useUserContext } from "../../store/context/userContext";

import Price from "./Price";
import Quantity from "./Quantity";
import CartButtons from "./CartButtons";
import Reviews from "./Reviews";
import Attributes from "./attributes";

// import LoginForm from "../ui/modules/form/login-form";

const ProductDetails = (props) => {
  // Props data...
  const { title, review, orderCount, productPrice, discountPrice, skuId, quantity: _quantity, id, productAttributes: attributes, setMain, discountPercentage } = props;

  // Calculate title...
  const calculateTitle = title.slice(0, 86);

  // Modal show // Quantity // Price
  const [show, setShow] = useState(false);
  const [stock, setStock] = useState(_quantity)
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(discountPrice > 0 ? discountPrice : productPrice)

  // Extract family
  let colors = attributes['colorFamily']
  let sizes = attributes['sizeFamily']

  // Remove duplicate data
  let uniqueColors = [...new Set(colors)];
  let uniqueSizes = [...new Set(sizes)];

  // Select data
  const [select, setSelect] = useState({ colors: {}, sizes: {}})
  const [tempSizes, setTempSizes] = useState(uniqueSizes)

  // Select family name
  let colorName = uniqueColors.length === 0 ? 'N/A' : select.colors.color
  let sizeName = uniqueSizes.length === 0 ? 'N/A' : select.sizes.size

  // Handle increase
  const handleIncrease = () => {
    setQuantity((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };

  // Handle Decrease
  const handleDecrease = () => {
    setQuantity((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  return (
    <Fragment>
      {/*<Modal*/}
      {/*  show={show}*/}
      {/*  onHide={() => setShow(!show)}*/}
      {/*  backdrop="static"*/}
      {/*  keyboard={false}*/}
      {/*  {...props}*/}
      {/*  size="lg"*/}
      {/*  aria-labelledby="contained-modal-title-vcenter"*/}
      {/*  centered*/}
      {/*>*/}
      {/*  <Modal.Header>*/}
      {/*    <div className="section-title">*/}
      {/*      <h2>Login</h2>*/}
      {/*    </div>*/}
      {/*  </Modal.Header>*/}
      {/*  <Modal.Body>*/}
      {/*    <LoginForm setShow={setShow} />*/}
      {/*  </Modal.Body>*/}
      {/*  <Modal.Footer>*/}
      {/*    <Button variant="secondary" onClick={() => setShow(!show)}>*/}
      {/*      Cancel*/}
      {/*    </Button>*/}
      {/*  </Modal.Footer>*/}
      {/*</Modal>*/}

      {/*Products details...*/}
      <div className="product-details p-3">
        <div className="product-title my-2">
          <h2 className="mb-0 text-capitalize text-muted-lg">
            { calculateTitle.length > 85 ? calculateTitle + "..." : calculateTitle }
          </h2>
        </div>

        {/*Reviews...*/}
        <Reviews reviews={review} order={orderCount} />
        <hr className="my-1" />

        {/*Price...*/}
        <Price price={price} productPrice={productPrice} discountPrice={discountPrice} discountPercent={discountPercentage} />
        <hr className="my-1" />

        <Attributes 
          colorName={colorName}
          sizeName={sizeName}
          colors={uniqueColors}
          sizes={tempSizes}
          setPrice={setPrice} 
          setMain={setMain}
          setTempSizes={setTempSizes}
          select={select}
          setSelect={setSelect}
          setStock={setStock}
        />

        {/*Quantity*/}
        <Quantity
          stock={stock}
          amount={quantity}
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
        />

        {/*Cart buttons...*/}
        <CartButtons stock={stock} price={price} select={select} product={props} amount={quantity} totalItem={quantity} />
      </div>
    </Fragment>
  );
};

export default ProductDetails;
