import { Image, ListGroup } from "react-bootstrap";

const ColorFamily = (props) => {
  // if (!colors) return null;
  // const { skuPropertyValues } = colors;

    // console.log('check attribute...', props.attributes)

  return (
    <div className="colors-wrapper mb-2">
      <div className="color-heading my-2">
        <h5 className="mb-0 text-capitalize">
          Color: <span>{'blue-t'}</span>
        </h5>
      </div>
      <ListGroup horizontal as="ul" className="color-body">
        {props.attributes.map((item, index) => {
            return (
                <ListGroup.Item as="li" className="p-0 me-1 border-0" key={index}>
                    <div className="img-wrapper">
                        <Image
                            src={item.attributeImage}
                            alt="single color"
                        />
                    </div>
                </ListGroup.Item>
            )
        })}
      </ListGroup>
    </div>
  );
};

export default ColorFamily;
