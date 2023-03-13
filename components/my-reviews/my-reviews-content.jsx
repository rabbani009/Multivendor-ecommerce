import React, {useEffect, useState} from "react";
import {Row, Col, Nav, Tab} from 'react-bootstrap'
import {useRouter} from "next/router";
import ProductsReviewItems from "./products-review-items";
// import {route} from "next/dist/server/router";

const MyReviewsContent = ({reviews}) => {
    const router = useRouter()
    // console.log('check router...', router)
    const [key, setKey] = useState(router?.query?.status)

    // console.log('check key...', key)

    const handleClick = (k) => {
        setKey(k)
        router.push(`${process.env.NEXT_PUBLIC_OWN_BASE_URL}${router.pathname}?status=${k}`)
    }

    // if (reviews?.length < 1) return <div className="d-flex align-items-center justify-content-center my-5">No reviews yet</div>

    return (
        <div className="my-reviews-content page-content bg-transparent">
            {/*<div className="my-reviews-tab">*/}
            {/*    <Tab.Container*/}
            {/*        defaultActiveKey="toBeReviewed"*/}
            {/*        transition={false}*/}
            {/*        id="noanim-tab-example"*/}
            {/*        className="mb-3"*/}
            {/*    >*/}
            {/*        <Tab eventKey="toBeReviewed" title={`To Be Reviewed (${1})`}>*/}
            {/*            <p>reviews list</p>*/}
            {/*            <p>Tobe </p>*/}
            {/*            <Sonnet />*/}
            {/*        </Tab>*/}
            {/*        <Tab eventKey="profile" title="History">*/}
            {/*            <p>profile</p>*/}
            {/*            <Sonnet />*/}
            {/*        </Tab>*/}
            {/*        <Tab eventKey="contact" title="Contact">*/}
            {/*            <p>Contact</p>*/}
            {/*            <Sonnet />*/}
            {/*        </Tab>*/}
            {/*    </Tab.Container>*/}
            {/*</div>*/}

            {/*<Tab.Content>*/}
            {/*    <Tab eventKey="toBeReviewed">*/}
            {/*        <p>test 1</p>*/}
            {/*        <Sonnet />*/}
            {/*    </Tab>*/}
            {/*    <Tab eventKey="second">*/}
            {/*        <p>test 2</p>*/}
            {/*        <Sonnet />*/}
            {/*    </Tab>*/}
            {/*</Tab.Content>*/}

            <Tab.Container id="left-tabs-example" onSelect={(k) => handleClick(k)} defaultActiveKey={key}>
                <Row className="flex-column">
                    <Col>
                        <Nav variant="pills">
                            <Nav.Item>
                                <Nav.Link eventKey="to-be-reviewed">To Be Reviewed</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="history">History</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col>
                        <Tab.Content>
                            <Tab.Pane eventKey="to-be-reviewed">
                                <ProductsReviewItems reviews={reviews} type={"to-be-reviewed"}/>
                                {/*<p>test 1</p>*/}
                                {/*<Sonnet />*/}
                            </Tab.Pane>
                            <Tab.Pane eventKey="history">
                                <ProductsReviewItems reviews={reviews} type={"history"}/>
                                {/*<p>test 2</p>*/}
                                {/*<Sonnet />*/}
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}

export default MyReviewsContent