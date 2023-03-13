import Link from "next/link";
import Image from 'next/image'

import { Card, Col } from "react-bootstrap";

const RadimartCardItem = ({ shop }) => {
  const { backgroundImage, slogan, logo, shopName, slug } = shop;

  return (
    <Col xs={6} lg={3} className="py-2">
      <div className="shop-module-item">
        <Link href={`radimart-shop/${slug}`}>
          <a className="text-decoration-none card-link">
              <Card className="border-0">
                <div className="shop-brand-overlay"></div>
                <div className="shop-brand-img">
                  <Image
                      src={backgroundImage || 'https://static-01.daraz.com.bd/p/d30d3f4f8c234bb01dbf7169324d055b.jpg'}
                      height="200"
                      width="200"
                      alt={shopName}
                      placeholder="blur"
                      blurDataURL={backgroundImage || 'https://static-01.daraz.com.bd/p/d30d3f4f8c234bb01dbf7169324d055b.jpg'}
                  />
                </div>
                <div className="shop-img p-1 rounded-circle">
                  <Image
                      src={logo || 'https://static-01.daraz.com.bd/other/shop/60c48ae9d4194cd1fb731a909a4e11d4.jpeg'}
                      height="200"
                      width="200"
                      alt={shopName}
                      placeholder="blur"
                      blurDataURL={logo || 'https://static-01.daraz.com.bd/other/shop/60c48ae9d4194cd1fb731a909a4e11d4.jpeg'}
                  />
                </div>
                <Card.Body className="p-1 py-sm-3 p-lg-3 text-center">
                  <div className="shop-name">
                    <h6 className="my-1 my-sm-0 text-capitalize">{shopName || 'Radimart'}</h6>
                  </div>
                  <div className="shop-slogan">
                    <small className="d-flex justify-content-center my-1">{slogan || 'দৈনন্দিন কেনাকাটায় প্রযুক্তি নির্ভর সমাধান'}</small>
                  </div>
                </Card.Body>
              </Card>
            </a>
        </Link>
      </div>
    </Col>
  );
};

export default RadimartCardItem;
