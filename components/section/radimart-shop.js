import Link from "next/link";
import { Button, Container, Row } from "react-bootstrap";

import RadimartCardItem from "../item/radimart-card-item";

const RadimartShop = ({ radimartShop }) => {

  if (radimartShop.length === 0) {
    return null;
  }

  const { content, sectionTitle } = radimartShop[0];

  // Display 8 item
  const calculateShop = content.slice(0, 8);

  return (
    <section className="radimart-shop-section py-2 py-md-3">
      <Container>
        <Row className="g-0 box-shadow-lg">
          <div className="radimart-shop rounded-3 p-2 p-md-3">
            <div className="section-title">
              <h4 className="mb-0 d-flex align-items-center text-uppercase">
                {sectionTitle}
              </h4>
            </div>

            <div className="radimart-shop-wrapper p-2 p-md-3">
              <Container className="shop-item-wrapper">
                <div className="shops-wrapper">
                  <Row>
                    {calculateShop &&
                        calculateShop.map((item, index) => {
                        return <RadimartCardItem shop={item} key={index} />;
                      })}
                  </Row>
                </div>
              </Container>
            </div>
            <div className="section-footer text-end">
              <Link href={{
                pathname: "/radimart-shops",
                query: {
                  page: 1
                }
              }}>
                <a>
                  <Button size="sm" variant="outline-success">
                    View all shop
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default RadimartShop;
