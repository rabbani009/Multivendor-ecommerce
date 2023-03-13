import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";

import { useUserContext } from "../../store/context/userContext";
import ForgetpassForm from "../../components/ui/modules/form/forgetpass-form";
import OtpForm from "../../components/ui/modules/form/otp-form";
import { set } from "react-hook-form";

const ForgotPasswordPage = () => {
  const { myUser } = useUserContext();
  const router = useRouter();
  // Show modals..
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");

  if (myUser) {
    router.push("/");
  }

  return (
    <Fragment>
      <Modal
        show={show}
        onHide={() => setShow(!show)}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Enter security code</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> Please check your email for your code.</p>
          <OtpForm email={email} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(!show)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="forgot-password-page page pb-0 pt-3">
        <section className="forgot-password-page-section page-section">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <div className="forgot-password-wrapper p-4">
                  <div className="section-title pb-4">
                    <h2 className="mb-0">Forgot password</h2>
                  </div>
                  <ForgetpassForm
                    setEmail={setEmail}
                    setShow={setShow}
                    show={show}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </Fragment>
  );
};

export default ForgotPasswordPage;
