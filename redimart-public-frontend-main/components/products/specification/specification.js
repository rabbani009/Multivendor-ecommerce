import { ListGroup } from "react-bootstrap";

const Specification = ({ specifications }) => {
  return (
    <div className="specification-wrapper">
      <ListGroup className="justify-content-center">
        {specifications &&
          specifications.map((specification) => {
            const { attrKey, attrValue } = specification;

            return (
              <ListGroup.Item key={attrKey} className="p-0 border-0">
                <div className="item-wrapper d-flex align-items-center">
                  <div className="text-muted me-2">{attrKey}:</div>
                  <small>{attrValue}</small>
                </div>
              </ListGroup.Item>
            );
          })}
      </ListGroup>
    </div>
  );
};

export default Specification;
