import {Col, Container, Row, Form, Button} from "react-bootstrap";

const ContactUs = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('fired handle submit...')
    }

    return (
        <div className="contact-us-page">
            <section className="features-section section-bg">
                <Container>
                    <Row>
                        <Col xs={{ span: 6, offset: 3 }}>
                            <h1 className="text-capitalize text-center">do not hesitate to contact with us.</h1>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="contact-section bg-light py-5">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="text-center py-3">Contact us</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" md={6}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="name" placeholder="Enter name" required/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" name="email" placeholder="yourmail@example.com" required/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="message">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" name="message" rows={3} placeholder="Enter your message..." required/>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col xs="12" md={6}>
                            <iframe className="w-100 h-100 my-4"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8901327544872!2d90.39282871498143!3d23.751296984588954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8981edba66f%3A0xbb0d31f3350fcc61!2sRadisson%20Digital%20Technologies%20Ltd!5e0!3m2!1sen!2sbd!4v1644382943782!5m2!1sen!2sbd"
                                allowFullScreen={true} loading="lazy"></iframe>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default ContactUs