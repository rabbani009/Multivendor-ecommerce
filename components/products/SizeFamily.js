import { ListGroup } from "react-bootstrap";

const SizeFamily = ({ onSizeChange, sizes, selectSize, selectSizeName }) => {
  if (!sizes) return null;
  const { skuPropertyValues } = sizes;
  return (
    <div className="sizes-wrapper mb-2">
      <div className="size-heading my-2">
        <h5 className="mb-0 text-capitalize">
          Size: <span>{selectSizeName}</span>
        </h5>
      </div>
      <ListGroup horizontal as="ul" className="size-body pt-2">
        {skuPropertyValues.map((item, index) => (
          <ListGroup.Item as="li" className="p-0 me-1 border-0" key={index}>
            <div className="size-wrapper">
              <span
                className={
                  index === selectSize
                    ? "size-item p-2 active"
                    : "size-item p-2"
                }
                onClick={() => onSizeChange(item, index)}
              >
                {item.propertyValueName}
              </span>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default SizeFamily;
