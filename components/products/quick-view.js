import { Fragment, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import ProductDetails from "./ProductDetails";
import ProductImagePreview from "./ProductImagePreview";

const QuickView = (props) => {
    const { productInfo, setPrice } = props;
    const { mainImage, image_module } = productInfo;

    // Image modules
    let tempImageModule = [{largeImage: mainImage, smallImage: mainImage}, ...image_module]
    let uniqueImages = [...new Set(tempImageModule)].slice(0,4);

    // Image preview handler
    const [mainImg, setMainImg] = useState(mainImage);
    const [isActive, setIsActive] = useState(0);

    return (
        <Fragment>
            <div className="single-product-wrapper">
                <section className="product-info-section">
                    <Container>
                        <Row className="box-shadow-lg">
                            <Col md={6} className="bg-white">
                                <ProductImagePreview
                                    isActive={isActive}
                                    image={mainImg}
                                    mainImage={mainImage}
                                    images={uniqueImages}
                                    setMain={setMainImg}
                                />
                            </Col>
                            <Col md={6} className="bg-white">
                                <ProductDetails isActive={isActive} setMain={setMainImg} {...productInfo} />
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </Fragment>
    );
};

export default QuickView;
