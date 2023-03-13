import { BiEdit } from "react-icons/bi";
import { Badge, ListGroup } from "react-bootstrap";

const AddressList = (props) => {
  const { item } = props;
  const { division, city, area, address, type, id } = item;

  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between border-1 rounded-1 my-1"
    >
      <div>
        {`${division}, ${city}, ${area}, ${address}| Delivery to: `}
        <Badge pill bg={type === "home" ? "primary border-0" : "info border-0"}>
          {" "}
          {type}
        </Badge>
      </div>
      <div className="edit-icon-wrapper">
        <BiEdit onClick={() => console.log(id)} />
      </div>
    </ListGroup.Item>
  );
};

export default AddressList;
