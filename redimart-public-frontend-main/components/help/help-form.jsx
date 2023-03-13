import {useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FaSearch} from "react-icons/fa";

const HelpForm = () => {
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        e.preventDefault()
        console.log(e)
    }

    return (
        <section className="search-section">
            <Container>
                <Row>
                    <Col xs={{ span: 6, offset: 3 }}>
                        <div className="search-box py-5 text-center">
                            <h2 className="text-light text-medium mb-4">Hi, How can we help you?</h2>

                            <Form className="search-form" onSubmit={handleSearch}>
                                {/*<div className="input-group custom-input-group mt-0 mt-sm-3 mt-lg-0 order-3 order-lg-2">*/}
                                <div className="input-group custom-input-group">
                                    <input
                                        type="text"
                                        name="query"
                                        value={search}
                                        onChange={(e) => setSearch(e.currentTarget.value)}
                                        className="form-control input-text"
                                        placeholder="Search for questions..."
                                    />
                                    <div className="input-group-append">
                                        <Button variant="primary" type="submit">
                                            <FaSearch />
                                        </Button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HelpForm