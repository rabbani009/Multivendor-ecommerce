import { useRouter } from "next/router";
import { Col, Container, Row } from "react-bootstrap";

import { useUserContext } from "../../store/context/userContext";
import RegisterForm from "../../components/ui/modules/form/register-form";

const SignupPage = () => {
  const router = useRouter();
  const { myUser } = useUserContext();

  if (myUser) {
    router.push("/");
  }

  return (
    <div className="signup-page page pb-0 pt-3">
      <section className="signup-page-section page-section">
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <div className="signup-wrapper p-4">
                <div className="section-title pb-4">
                  <h2 className="mb-0">Signup</h2>
                </div>

                <RegisterForm />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default SignupPage;
