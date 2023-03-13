import {Container, Row, Col} from "react-bootstrap";

const TermsAndConditions = () => {
    return (
        <div className="tac-page py-4">
            <Container>
                <Row>
                    <Col>
                        {/*<div dangerouslySetInnerHTML={{__html: `hello terms and conditions page...`}}></div>*/}
                        <div className="tac-content-wrapper editor-text py-3">
                            <h1>Disclaimer - Terms and conditions</h1>
                            <p>Doyalbaba.com is a service provided by Radisson Digital Technologies Ltd. (subject to your compliance with the Terms and Conditions set forth below). Please read these Terms and Conditions before using this Web Site.</p>
                            <h2>General</h2>
                            <p>Advertisers and users are responsible for ensuring that advertising content, text, images, graphics, video (&apos;Content&apos;) uploaded for inclusion on Doyalbaba.com complies with all applicable laws. Doyalbaba.com assumes no responsibility for any illegality or any inaccuracy of the Content. The advertisers and user guarantees that his or her Content do not violate any copyright, intellectual property rights or other rights of any person or entity, and agrees to release Doyalbaba.com from all obligations, liabilities and claims arising in connection with the use of (or the inability to use) the service. Advertisers agree that their Content can may be presented through Doyalbaba.com&apos;s partner sites under the same terms and conditions as on Doyalbaba.com.</p>

                            <h2>Use</h2>
                            <p>We use users&apos; personal information to:</p>
                            <ul>
                                <li>Provide our services</li>
                                <li>Resolve disputes, collect fees, and troubleshoot problems</li>
                                <li>Encourage safe trading and enforce our policies</li>
                                <li>Customize users experience, measure interest in our services</li>
                                <li>Improve our services and inform users about services and updates</li>
                                <li>Communicate marketing and promotional offers to you according to your preferences</li>
                                <li>Do other things for users as described when we collect the information</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TermsAndConditions