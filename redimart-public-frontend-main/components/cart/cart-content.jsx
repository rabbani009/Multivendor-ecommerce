import { Fragment } from "react";
import {Row, Col, Button} from "react-bootstrap";
import CartItemList from "./cart-item-list";
import CartTotal from "./cart-total";

const CartContent = (props) => {

    return (
        <Fragment>
            <Row className="py-2">
                <Col>
                    <div className="cart-item d-flex flex-column align-items-center">
                        <div className="cart-title">
                            <h5>Item</h5>
                        </div>
                    </div>
                </Col>

                <Col>
                    <div className="cart-item d-flex flex-column align-items-center">
                        <div className="cart-title">
                            <h5>Price</h5>
                        </div>
                    </div>
                </Col>

                <Col>
                    <div className="cart-item d-flex flex-column align-items-center">
                        <div className="cart-title">
                            <h5>Quantity</h5>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="cart-item d-flex flex-column align-items-center">
                        <div className="cart-title">
                            <h5>Total</h5>
                        </div>
                    </div>
                </Col>
            </Row>

            {
                props.cart && props.cart.map(item => {
                    return <CartItemList key={item.id} item={item} />
                })
            }

            <hr className="mt-3" />
            <Row>
                <Col xs="12">
                    <div className="d-flex justify-content-between py-4">
                        <Button variant="secondary">Continue shopping</Button>
                        <Button variant="secondary" onClick={props.clearCart}>Clear shopping cart</Button>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs="12">
                    <CartTotal/>
                </Col>
            </Row>
            {/* <Row>
                <Col className="text-end my-4">
                    <Button variant="outline-warning" onClick={()=> router.push('/shipping')}>process to checkout</Button>
                </Col>
            </Row> */}
        </Fragment>
    )
}

export default CartContent;