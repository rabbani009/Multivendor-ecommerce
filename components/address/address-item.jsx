import { ListGroup } from "react-bootstrap";
import AddressList from "./address-list";

const AddressItem = ({ address }) => {
  return (
    <ListGroup as="ul">
      {address.map((item) => (
        <AddressList key={item.id} item={item} />
      ))}
    </ListGroup>
  );
};

export default AddressItem;
