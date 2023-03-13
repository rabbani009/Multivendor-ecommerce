import { Badge } from "react-bootstrap";

const ShippingAddress = ({deliveryAddress}) => {
  const {address, type, name, phone} = deliveryAddress
  // console.log('checck delivery address...', deliveryAddress)
  // if (!props.address) return <div>No address found!</div>;

  // const { address, division, city, area, additional, type, customer } =
  //   props.address;
  // const genAddress = `${address}, ${area}, ${city}, ${division}`;

  return (
    <div className="shipping-address px-4 py-2">
      <div className="shipping-address-title mb-2">
        <p className="mb-0">Shipping address: </p>
      </div>
      <div className="shipping-address-footer">
        <div>
          <small className="text-muted">Name: {name || "N/A"}</small>
        </div>
        <div>
          <small className="text-muted">Phone: {phone || "N/A"}</small>
        </div>
      </div>

      <div className="shipping-address-body">
        <div>
          <h6 className="mb-0">{""}</h6>
        </div>
        <div className="address">
          <p className="mb-0">
            <Badge bg={`${type === "home" ? "success" : "primary"}`}>
              {type}
            </Badge>{" "}
            <small>{address || "N/A"}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShippingAddress;
