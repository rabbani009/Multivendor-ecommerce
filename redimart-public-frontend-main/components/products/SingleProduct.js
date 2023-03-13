import React, {Fragment, useState} from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";

import Delivery from "./Delivery";
import ProductDetails from "./ProductDetails";
import ProductImagePreview from "./ProductImagePreview";
import Description from "../product/description";
import RatingsAndFeedback from "../product/ratings-and-feedback";
// import Description from "./specification/description";
// import Specification from "./specification/specification";
// import Reviews from "./specification/reviews";

const SingleProduct = ({ productInfo }) => {
  const { mainImage, image_module, description, productFeedback, specifications, review, deliveryModule, vendor,returnAndWarrantyModule, title } =
    productInfo;
  const [key, setKey] = useState("description");

  // Image modules
  let tempImageModule = [{largeImage: mainImage, smallImage: mainImage}, ...image_module]
  let uniqueImages = [...new Set(tempImageModule)].slice(0,4);

  // Image preview handler
  const [mainImg, setMainImg] = useState(mainImage);

  // Product Preview image handler
  // const handleProductPreviewImg = (selectImg) => {
  //   setMainImg(selectImg);
  // };

  return (
    <Fragment>
      <div className="single-product-wrapper py-3">
        <section className="product-info-section pb-3">
          <Container>
            {/*<Row className="box-shadow-lg">*/}
            <Row>
            <Col md={4} className="bg-white">
                <ProductImagePreview
                    image={mainImg}
                    mainImage={mainImage}
                    images={uniqueImages}
                    setMain={setMainImg}
                />
              </Col>
              <Col md={5} className="bg-white">
                <ProductDetails setMain={setMainImg} {...productInfo} />
              </Col>
              <Col md={3} className="bg-white border-left">
                <Delivery deliveryInfo={deliveryModule}  vendor={vendor} warranty={returnAndWarrantyModule}/>
              </Col>
            </Row>
          </Container>
        </section>
        {/*product description section*/}
        <Description description={description} title={title}/>

        {/*product ratings and feedback section*/}
        <RatingsAndFeedback feedback={productFeedback} title={title}/>

        {/*<section className="product-specification-section mt-3">*/}
        {/*  <Container>*/}
        {/*    <Row className="bg-white">*/}
        {/*      <div className="product-specification-section-wrapper p-3">*/}
        {/*        hello*/}
        {/*      </div>*/}
        {/*    </Row>*/}
        {/*  </Container>*/}
        {/*</section>*/}
        {/*<section className="product-specification-section mt-3">*/}
        {/*  <Container>*/}
        {/*    /!*<Row className="box-shadow-lg bg-white">*!/*/}
        {/*    <Row className="bg-white">*/}
        {/*    <div className="product-specification-section-wrapper p-3">*/}
        {/*        <Tabs*/}
        {/*          id="product_specification_wrapper"*/}
        {/*          activeKey={key}*/}
        {/*          onSelect={(k) => setKey(k)}*/}
        {/*          className="py-2 justify-content-center"*/}
        {/*        >*/}
        {/*          <Tab eventKey="description" title="Description">*/}
        {/*            <Description description={description} />*/}
        {/*          </Tab>*/}
        {/*          /!*<Tab eventKey="specification" title="Specification">*!/*/}
        {/*          /!*  <Specification specifications={specifications} />*!/*/}
        {/*          /!*</Tab>*!/*/}
        {/*          <Tab eventKey="reviews" title="Reviews">*/}
        {/*            <Reviews review={review} />*/}
        {/*          </Tab>*/}
        {/*        </Tabs>*/}
        {/*      </div>*/}
        {/*    </Row>*/}
        {/*  </Container>*/}
        {/*</section>*/}
      </div>
    </Fragment>
  );
};

export default SingleProduct;
