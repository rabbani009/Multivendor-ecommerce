import Link from "next/link";
import Image from "next/image";
import {Card, Col, Container, Row} from "react-bootstrap";

import customerHelpImage from "../../public/images/customer-help-center.png";
import sellerHelpImage from "../../public/images/seller-help-center.png";

const HelpCard = () => {
    return (
        <section className="features-section py-2">
            <Container>
                <Row>
                    <Col>
                        <div>
                            <h1 className="text-center text-size-xll text-muted my-4">Help center</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{ span: 8, offset: 2 }}>
                        <Row>
                            <Col xs={6}>
                                <Card>
                                    <Image className="card-img-top" height={236} width={354} layout="responsive" src={customerHelpImage} alt="Customer help image" />
                                    <Card.Body>
                                        <Link
                                              href={{
                                                  pathname: '/help/customer-help-center',
                                                  query: { cat: 1, subCat: 3 },
                                              }}>
                                            <a className="stretched-link text-size-lg text-decoration-none text-black-400 mb-2 d-block">
                                                Customer help-center
                                            </a>
                                        </Link>
                                        <Card.Text className="text-size-sm text-blue">
                                            Some quick example text to build on the card title and make up the bulk of
                                            the cards content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={6}>
                                <Card>
                                    <Image className="card-img-top" height={236} width={354} layout="responsive" src={sellerHelpImage} alt="Seller help image" />
                                    {/*<Card.Img variant="top" src="https://dummyimage.com/354x236/000/fff" />*/}
                                    <Card.Body>
                                        <Link
                                            href={{
                                                pathname: '/help/seller-help-center',
                                                query: { cat: 1, subCat: 1 },
                                            }}>
                                            <a className="stretched-link text-size-lg text-decoration-none text-black-400 mb-2 d-block">
                                                Seller help-center
                                            </a>
                                        </Link>
                                        <Card.Text className="text-size-sm text-blue">
                                            Some quick example text to build on the card title and make up the bulk of
                                            the cards content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HelpCard