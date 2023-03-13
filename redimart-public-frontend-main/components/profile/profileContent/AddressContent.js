import Address from "../../address/address";

const AddressContent = ({ address }) => {
    if (address.length === 0) return <div>no address found!</div>
  return (
    <div className="address-content page-content p-4">
      <Address address={address} />
    </div>
  );
};

export default AddressContent;
