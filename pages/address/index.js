import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

import withAuth from "../../components/hoc/withAuth";
import ProfileNav from "../../components/profile/ProfileNav";
import AddressContent from "../../components/profile/profileContent/AddressContent";
import { useAddressContext } from "../../store/context/addressContext";
import LoadingSpin from "../../components/ui/loading-spin";

const AddressPage = () => {
  const { loading, addToAddressList, message, error, address } = useAddressContext();

  // Fetch address list...
  useEffect(() => {
    addToAddressList();
    // eslint-disable-next-line
  }, []);

  // Loading and error
  if (loading) return <LoadingSpin />;
  if (error) return <div>{message}</div>;

  return (
    <div className="address-page page">
      <section className="address-page-section page-section">
        <Container>
          <Row>
            <Col xl={3}>
              <ProfileNav />
            </Col>
            <Col xl={9}>
              <AddressContent address={address} />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default withAuth(AddressPage);
// export default AddressPage;
