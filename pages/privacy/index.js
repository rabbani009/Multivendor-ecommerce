import {Col, Container, Row} from "react-bootstrap";

const Privacy = () => {
    return (
        <div className="privacy-page py-4">
            <Container>
                <Row>
                    <Col>
                        {/*<div dangerouslySetInnerHTML={{__html: `hello terms and conditions page...`}}></div>*/}
                        <div className="privacy-content-wrapper editor-text py-3">
                            <h1>Privacy Statement</h1>
                            <p>Doyalbaba.com will collect information from Users and Advertisers. It is a condition of use of the Doyalbaba.com that each User and advertiser consents and authorises Doyalbaba.com to collect and use this information. Doyalbaba.com also reserves the right to disclose it to Company Affiliates and any other person for the purposes of administering, supporting and maintaining Doyalbaba.com, as well as for improving Doyalbaba.com, for example by using the information for research, marketing, product development and planning.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Privacy