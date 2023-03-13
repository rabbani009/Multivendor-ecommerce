import { useRouter } from "next/router";
import { Col, Container, Row } from "react-bootstrap";

import { useUserContext } from "../../store/context/userContext";
import LoginForm from "../../components/ui/modules/form/login-form";

const LoginPage = () => {
  const router = useRouter();
  const { myUser } = useUserContext();

  if (myUser) {
    router.push("/");
  }

  return (
    <div className="login-page page pb-0 pt-3">
      <section className="login-page-section page-section">
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <div className="login-wrapper p-4">
                <div className="section-title pb-4">
                  <h2 className="mb-0">Login</h2>
                </div>

                <LoginForm />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default LoginPage;
