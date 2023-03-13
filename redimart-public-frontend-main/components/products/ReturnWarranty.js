import Link from "next/link";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import { BsInfoCircle } from "react-icons/bs";
import { FaDollarSign, FaHouseUser, FaMapMarkerAlt } from "react-icons/fa";
import WarrantyModuleList from "../ui/modules/warranty/warranty-module-list";

const popover = (
  <Popover className="rounded-1" id="popover">
    <div className="tooltip-header mb-3">
      <h6 className="mb-0">Return & Warranty</h6>
    </div>
    <div className="tooltip-body">
      <div className="tooltip-options">
        <div className="tooltip-item d-flex align-items-start pb-2">
          <div className="icon pe-2">
            <FaHouseUser />
          </div>
          <div className="text">
            <p className="mb-0">
              7 Days Returns - Change of mind is not applicable as a Return
              Reason for this product{" "}
              <Link href="#terms">
                <a className="text-decoration-none text-info">
                  <strong> Terms & Conditions</strong>
                </a>
              </Link>{" "}
              apply
            </p>
          </div>
        </div>

        <div className="tooltip-item d-flex align-items-center pb-2">
          <div className="icon pe-2">
            <FaDollarSign />
          </div>
          <div className="text">
            <p className="mb-0"> Warranty not available</p>
          </div>
        </div>
        <p className="mb-0">
          If your product does not come with any warranty, then you can still
          benefit from our return policy. Please read the return policy
          conditions{" "}
          <Link href="#here">
            <a className="text-decoration-none text-info">
              <strong> here.</strong>
            </a>
          </Link>
        </p>
      </div>
    </div>
  </Popover>
);

const ReturnWarranty = (props) => {
  const {warranty} = props
  if (!warranty) return null
  return (
    <>
      <div className="module py-3">
        <div className="module-header d-flex align-items-center justify-content-between pb-2 px-3">
          <h6 className="mb-0">Return & Warranty</h6>
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
          {
            warranty.map((item, index) => <WarrantyModuleList key={index} item={item}/>)
          }
          {/*<div className="module-body-item py-2 px-3">*/}
          {/*  <div className="module-item-wrapper d-flex justify-content-between">*/}
          {/*    <div className="d-flex">*/}
          {/*      <div className="icon pe-2">*/}
          {/*        <FaMapMarkerAlt />*/}
          {/*      </div>*/}
          {/*      <div>*/}
          {/*        <div className="main-text">7 Days Returns</div>*/}
          {/*        <span className="text-muted">*/}
          {/*          Change of mind is not applicable*/}
          {/*        </span>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}

          {/*<div className="module-body-item py-2 px-3">*/}
          {/*  <div className="module-item-wrapper d-flex justify-content-between">*/}
          {/*    <div className="d-flex align-items-center">*/}
          {/*      <div className="icon pe-2">*/}
          {/*        <FaMapMarkerAlt />*/}
          {/*      </div>*/}
          {/*      <div>*/}
          {/*        <div className="main-text">Warranty not available</div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
    </>
  );
};

export default ReturnWarranty;
