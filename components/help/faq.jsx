import {Col, Container, Row, Accordion} from "react-bootstrap";
import FaqBody from "./faq-body";
import FaqNavLists from "./faq-nav-lists";

const Faq = ({ faq }) => {

    return (
        <section className="faq-section py-2">
            <Container>
                <Row>
                    <Col>
                        <div>
                            <h2 className="text-center text-size-xl text-muted my-4">Frequently Asked Questions</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs="3">
                        <FaqNavLists nav={faq?.sideCategoryList}/>
                    </Col>
                    <Col xs="9">
                        <FaqBody questions={faq?.questions}/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Faq