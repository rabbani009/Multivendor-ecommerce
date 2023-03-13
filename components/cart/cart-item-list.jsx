import Image from 'next/image'
import { Fragment } from 'react';

import {Row, Col} from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { isEmpty } from '../../lib/helpers';

import AmountButtons from "../products/AmountButtons";
import {useCartContext} from "../../store/context/cartContext"

const CartItemList  = (props) => {
    const {item} = props
    const {removeItem, toggleAmount } = useCartContext()

    // Total item inc && dec handler
    const handleIncrease = () => {
        toggleAmount(item.id, "inc");
    }
    const handleDecrease = () => {
        toggleAmount(item.id, "dec");
    }

    let genSizeName = item && item.select && item.select.size ? item.select.size.split(" ") : item.select.size
    let genColorName = item && item.select && item.select.color
    const calculateTitle = item.title.slice(0, 13);

    return (
        <Row className="py-2 align-items-center">
                <Col>
                    <div className="cart-item d-flex flex-column align-items-start">
                        <div className="cart-body d-flex align-items-center">
                            <div className="cart-img pe-3">
                                <Image className="rounded-3" src={`${item.image}_100x75.png`} width={100} height={75} alt={item.title} />
                            </div>
                            <div className="cart-content d-flex flex-column justify-content-center align-items-start">
                                <h5 className="title mb-0">
                                    {calculateTitle.length > 12
                                        ? calculateTitle + "..."
                                        : calculateTitle
                                    }
                                </h5>
                                {
                                    !isEmpty(item.select) && (
                                        <Fragment>
                                            <p className="mb-0 text-sm">Color: <small className="text-muted">{genColorName ? genColorName : 'Any'}</small></p>
                                            {
                                                genSizeName[0] && <p className="mb-0 text-sm">Size: <small className="text-muted">{genSizeName[0]}</small></p>
                                            }
                                            
                                        </Fragment>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </Col>

                <Col>
                    <div className="cart-item d-flex flex-column align-items-center">
                        <div className="cart-body d-flex align-items-center">
                            <div className="cart-content d-flex flex-column justify-content-center align-items-start">
                                <h5>৳{item.price}</h5>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col>
                    <div className="cart-item d-flex flex-column align-items-center">
                        <div className="cart-body d-flex align-items-center">
                            <AmountButtons 
                                stock={item.quantity}
                                amount={item.totalItem}
                                increase={handleIncrease}
                                decrease={handleDecrease}
                            />
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="cart-item d-flex flex-column">
                        <div className="cart-body d-flex w-100 justify-content-end">
                            <div className="cart-content d-flex flex-column justify-content-center w-50">
                                <h5>৳{item.price * item.totalItem}</h5>
                            </div>
                            <div className="w-25">
                                <button
                                    type="button"
                                    className="remove-btn d-flex"
                                    onClick={() => removeItem(item.id)}
                                >
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
    )
}

export default CartItemList