import {Container, Row} from "react-bootstrap";

const Description = ({ description, title }) => {
  return (
    // <div className="description-wrapper">
    //   <div dangerouslySetInnerHTML={{__html: description}}></div>
    // </div>
  <section className="product-description pb-3">
      <Container>
          <Row className="bg-white">
              <div className="description-wrapper p-3">
                  <div className="product-title mb-3">
                      <h4 className="mb-0">{title}</h4>
                  </div>
                  <hr className="my-2"/>
                  <div className="html-content-wrapper" dangerouslySetInnerHTML={{__html: description}}></div>
              </div>
          </Row>
      </Container>
  </section>
  );
};

export default Description;
