import { useEffect } from "react";
// import { Col, Container, Row, Button } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";

import withAuth from "../../components/hoc/withAuth";
import { useWishlistContext } from "../../store/context/wishlistContext";
import { useUserContext } from "../../store/context/userContext";
import WishListContent from "../../components/profile/profileContent/WishListContent";
import ProfileNav from "../../components/profile/ProfileNav";
import LoadingSpin from "../../components/ui/loading-spin";
import { Toastify } from "../../components/ui/modules/alert/toastify";

const WishlistPage = () => {
  const { getToWishlist, loading, wishlist } = useWishlistContext();
  const { myToken } = useUserContext();

  useEffect( () => {
    getToWishlist(myToken)
    // eslint-disable-next-line
  }, []);

  if (loading) return <LoadingSpin />;

  return (
    <div className="wishlist-page page">
      <section className="wishlist-page-section page-section">
        <Container>
          <Row>
            <Col xl={3}>
              <ProfileNav />
            </Col>
            <Col xl={9}>
              <WishListContent products={wishlist} />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default withAuth(WishlistPage);
