import React from "react";
import { Col, Row, Container } from "react-bootstrap"

import VendorProduct from "./vendor-product"

import Filter from "../ui/filter"

const VendorProducts = ({ products }) => {
    const { data, links } = products

    return (
        <section className="shop-product-section py-3">
            <Container>
                <Row>
                    <Col xs="3">
                        <Filter/>
                    </Col>
                    <Col xs="9">
                        {/*<VendorProduct links={links} products={data}/>*/}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default VendorProducts