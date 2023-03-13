import Link from "next/link";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import { BsInfoCircle } from "react-icons/bs";
import { FaDollarSign, FaHouseUser, FaMapMarkerAlt } from "react-icons/fa";

const popover = (
  <Popover className="rounded-1" id="popover">
    <div className="tooltip-header mb-3">
      <h6 className="mb-0">Delivery Options</h6>
    </div>
    <div className="tooltip-body">
      <div className="tooltip-options">
        <div className="tooltip-item d-flex align-items-start pb-2">
          <div className="icon pe-2">
            <FaHouseUser />
          </div>
          <div className="text">
            <p className="mb-0">
              {" "}
              <strong>Home Delivery</strong>: Enjoy delivery of your order
              directly to the doorstep!
            </p>
            <Link href="#">
              <a className="text-decoration-none text-info">Find out more</a>
            </Link>
          </div>
        </div>

        <div className="tooltip-item d-flex align-items-start pb-2">
          <div className="icon pe-2">
            <FaDollarSign />
          </div>
          <div className="text">
            <p className="mb-0">
              {" "}
              <strong>Cash on Delivery</strong>: Available!
            </p>
          </div>
        </div>
      </div>
    </div>
  </Popover>
);

const DeliveryOption = ({address, days, delivery}) => {
  const {area, city, division, price} = address
  const genAddress= `${division}, ${city}, ${area}`
  return (
    <>
      <div className="module pt-3">
        <div className="module-header d-flex align-items-center justify-content-between pb-2 px-3">
          <h6 className="mb-0">Delivery Options</h6>
          <div className="module-header-icon">
            <OverlayTrigger trigger="focus" placement="left" overlay={popover}>
              <Button
                variant="default"
                className="d-flex align-items-center p-0"
              >
                {" "}
                <BsInfoCircle />
              </Button>
            </OverlayTrigger>
          </div>
        </div>

        <div className="module-body">
          <div className="module-body-item py-2 px-3">
            <div className="module-item-wrapper d-flex">
              <div className="d-flex pe-1">
                <div className="icon pe-2">
                  <FaMapMarkerAlt />
                </div>
                <div className="main-text">
                  {genAddress}
                </div>
              </div>
              {/*<div>*/}
              {/*  <Button*/}
              {/*    variant="default"*/}
              {/*    className="p-0 text-info text-uppercase"*/}
              {/*  >*/}
              {/*    Change*/}
              {/*  </Button>*/}
              {/*</div>*/}
            </div>
            <hr className="my-2" />
          </div>

          <div className="module-body-item py-2 px-3">
            <div className="module-item-wrapper d-flex justify-content-between">
              <div className="d-flex">
                <div className="icon pe-2">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <div className="main-text">{delivery}</div>
                  <span className="text-muted shipping-days">{days}</span>
                </div>
              </div>
              <div>
                <span className="shipping-fee">৳ {price}</span>
              </div>
            </div>
          </div>

          <div className="module-body-item pt-2 px-3">
            <div className="module-item-wrapper d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <div className="icon pe-2">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <div className="main-text">Cash on Delivery Available</div>
                </div>
              </div>
            </div>
            <hr className="mt-3" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveryOption;
