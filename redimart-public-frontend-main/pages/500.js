import {Button, Col, Container, Row} from "react-bootstrap";
import Image from "next/image";
import notFound from "../public/images/pages/404.png";
import Link from "next/link";

const ServeErrorPage = () => {
    return (
        <section className="page page-section not-found-page d-flex align-items-center justify-content-center bg-deep-milk py-5">
            <Container>
                <Row>
                    <Col>
                        <div className="text-center">
                            <Image src={notFound} width={482} height={294} alt="Not found page!" />
                            {/*<img src={notFound.src} alt="Not found page!"/>*/}
                            <h1 className="text-size-xll">Oops!</h1>
                            <h3 className="mb-4">We can’t find the Page you are Looking for.</h3>
                            <Button size="lg" variant="warning">
                                <Link href="/" className="btn btn-link">
                                    <a className="text-decoration-none text-dark">
                                        Here are some helpful link Instead
                                    </a>
                                </Link>
                            </Button>
                            <p className="my-2 text-size-lg">contact@radimart.com</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ServeErrorPage