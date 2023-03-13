import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProfileNav from "../../components/profile/ProfileNav";
import ProfileContent from "../../components/profile/profileContent/ProfileContent";
import withAuth from "../../components/hoc/withAuth";

const ProfilePage = () => {
  return (
    <div className="profile-page page">
      <section className="profile-page-section page-section">
        <Container>
          <Row>
            <Col xl={3}>
              <ProfileNav />
            </Col>
            <Col xl={9}>
              <ProfileContent />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default withAuth(ProfilePage);
