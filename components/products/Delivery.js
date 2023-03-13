import DeliveryOption from "./DeliveryOption";
import ReturnWarranty from "./ReturnWarranty";
import SoldBy from "./SoldBy";

const Delivery = (props) => {
    const {vendor, deliveryInfo, warranty}= props
  const {address, days, delivery} = deliveryInfo

  return (
    <div className="delivery-wrapper bg-white">
      <DeliveryOption address={address} days={days} delivery={delivery} />
      <ReturnWarranty warranty={warranty} />
      <SoldBy shopInfo={vendor} />
    </div>
  );
};

export default Delivery;
