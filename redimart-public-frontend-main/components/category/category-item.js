import Link from "next/link";
import Image from 'next/image'
import { Card, Col } from "react-bootstrap";

const CategoryItem = (props) => {
  const { category } = props;
  const { icon, inner, slug, title } = category;

  return (
    <Col lg={2} sm={4} xs={6} className="py-3">
      <div className="cat-module-item">
        <Card className="border-0 bg-transparent">
          <Card.Body className="m-auto p-0">
            <div className="statItem">
              <Link href={`category/${slug}`}>
                <a className="text-decoration-none text-light bg-transparent">
                  <div className="statInfo">
                    {/*<img src={inner} alt={title} />*/}
                    <Image
                        src={inner}
                        width={130}
                        height={129}
                        layout="responsive"
                        blurDataURL="https://public.radimart.com/public/category/Personal%20Care/inner.png"
                        placeholder="blur"
                        alt={title}
                    />
                  </div>
                </a>
              </Link>
              <div className="statThumb bg-light w-100">
                {/*<img src={icon} alt={slug} />*/}
                <Image
                    src={icon}
                    width={131}
                    height={130}
                    layout="responsive"
                    blurDataURL="https://public.radimart.com/public/category/Personal%20Care/icon.png"
                    placeholder="blur"
                    alt={slug}
                />
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};

export default CategoryItem;
