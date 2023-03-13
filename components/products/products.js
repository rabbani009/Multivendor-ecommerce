import Link from "next/link";

import { Button, Container, Row } from "react-bootstrap";

import ProductItem from "./product-item";

const Products = (props) => {

  if (!props.products || props.products.length === 0) return null;

  const { products, title, link } = props;
  const calculateProducts = products.slice(0, 12);

  return (
    <section className="products-section py-2 py-md-3">
      <Container>
        <div className="products-wrapper box-shadow-lg rounded-3 p-2 p-md-3">
          <div className="section-title">
            <h4 className="mb-0 d-flex align-items-center text-uppercase">
              {title}
            </h4>
          </div>

          <Container className="product-item-wrapper py-2 py-md-3">
            <Row>
              {
                calculateProducts &&
                  calculateProducts.map((product) => <ProductItem key={product.id} product={product} />)
              }
            </Row>
          </Container>

          <div className="section-footer text-end">
            <Link href={`/products/${link}`}>
              <a>
                <Button size="sm" variant="outline-success">
                  View products
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Products;
