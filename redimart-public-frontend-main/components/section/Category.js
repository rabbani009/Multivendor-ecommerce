import Link from "next/link";
import { Container, Row, Button } from "react-bootstrap";

import CategoryItem from "../category/category-item";

const Category = (props) => {
  const { categories } = props;
  if (!categories || categories.length === 0) return null;
  const { content: categoriesContent } = categories[0];

  const calculateCategories = categoriesContent.slice(0, 12);

  return (
    <section className="category-section py-2 py-md-3">
      <Container>
        <div className="category-wrapper box-shadow-lg rounded-3 p-2 p-md-3">
          <div className="section-title">
            <h4 className="mb-0 d-flex align-items-center text-uppercase">
              {/* <img
                src="https://api.zdrop.com.bd/public/storage/home/icon/super_deal.svg"
                alt="icon"
              />{" "} */}
              Explore our Category
            </h4>
          </div>

          <Container className="category-item-wrapper py-3">
            <div className="cat-modules">
              <Row>
                {calculateCategories &&
                  calculateCategories.map((cat_content, index) => {
                    return <CategoryItem key={index} category={cat_content} />;
                  })}
              </Row>
            </div>
          </Container>

          <div className="section-footer text-end">
            <Link href="/categories">
              <a>
                <Button size="sm" variant="outline-success">
                  All categories
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Category;
