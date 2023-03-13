import { Fragment } from "react";
import { useRouter } from "next/router";
import { Col, Container, Row } from "react-bootstrap";

import { useUserContext } from "../../store/context/userContext";
import ResetpassForm from "../../components/ui/modules/form/resetpass-form";

const ResetPassword = () => {
  const router = useRouter();
  const { myUser } = useUserContext();

  if (myUser) {
    router.push("/");
  }

  return (
    <Fragment>
      <div className="reset-password-page page pb-0 pt-3">
        <section className="reset-password-page-section page-section">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <div className="reset-password-wrapper p-4">
                  <div className="section-title pb-4">
                    <h2 className="mb-0">Reset password</h2>
                  </div>

                  <ResetpassForm />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </Fragment>
  );
};

export default ResetPassword;
