import Link from "next/link";
import Image from 'next/image'

import {Col, Container, Form, FormControl, InputGroup, Nav, Row,} from "react-bootstrap";
import {FaAngleRight, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope, FaTwitter, FaYoutube,} from "react-icons/fa";

import payments from "../../public/images/payments.png"

const Footer = () => {
  const exploreCopyRightYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer mt-2 mt-md-3">
        {/* <Container fluid className="p-0">
          <div className="footer-top py-3">
            <Container>
              <Row className="justify-content-center">
                <Col lg={9}>
                  <Row className="align-items-center">
                    <Col lg={6}>
                      <div className="section-title pe-0 pe-lg-2 mb-2 mb-lg-0">
                        <h3 className="mb-0 text-uppercase text-center text-sm-end">
                          SUBSCRIBE FOR NEWSLETTER
                        </h3>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <Form className="ps-2">
                        <InputGroup>
                          <FormControl
                            className="rounded-0 py-2"
                            placeholder="Your email address here..."
                            aria-label="Recipient's email"
                            aria-describedby="email"
                          />
                          <InputGroup.Text
                            id="basic-addon2"
                            className="text-uppercase rounded-0 px-4"
                          >
                            Subscribe
                          </InputGroup.Text>
                        </InputGroup>
                      </Form>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        </Container> */}
        <Container fluid className="main-footer">
          <Container>
            <Row>
              <Col xs={12} sm={6} md={4} lg={3} className="py-2 py-sm-0">
                <div className="single-footer mb-2 mb-lg-0 text-center text-sm-start">
                  <h5>Our Story</h5>
                  <div className="row">
                    <div className="col-12 col-lg-8">
                      <hr />
                    </div>
                  </div>
                  <ul className="contact-list list-unstyled  pl-0 mb-0 our-description">
                    Radimart is an e-commerce corporation based in Dhaka,
                    Bangladesh that facilitates consumer-to-consumer and
                    business-to-consumer sales through its website. We connect
                    millions of buyers and sellers across the country,
                    empowering people and creating economic opportunity for all.
                  </ul>
                  <br />
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3} className="py-2 py-sm-0">
                <div className="single-footer mb-2 mb-lg-0 text-center text-sm-start">
                  <h5>About Radimart.com</h5>
                  <div className="row">
                    <div className="col-12 col-lg-8">
                      <hr />
                    </div>
                  </div>
                  <ul className="links-list list-unstyled pl-0 mb-0">
                    <li>
                      <Link href="/our-story">
                        <a><FaAngleRight /> Our Story</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#feedback">
                        <a><FaAngleRight /> Feedback</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3} className="py-2 py-sm-0">
                <div className="single-footer mb-2 mb-lg-0 text-center text-sm-start">
                  <h5>Help & Support</h5>
                  <div className="row">
                    <div className="col-12 col-lg-8">
                      <hr />
                    </div>
                  </div>
                  <ul className="links-list list-unstyled pl-0 mb-0">
                    <li>
                      <Link href="/help">
                        <a><FaAngleRight />Help Center</a>
                      </Link>
                    </li>
                    {/*<li><a href="test"><FaAngleRight />Terms and Conditions</a></li>*/}
                    <li>
                      <Link href="/terms-and-conditions">
                        <a><FaAngleRight />Terms and Conditions</a>
                      </Link>
                    </li>
                    {/*<li><a href="#privacy"><FaAngleRight />Privacy Statement</a></li>*/}
                    <li>
                      <Link href="/privacy">
                        <a><FaAngleRight />Privacy Statement</a>
                      </Link>
                    </li>
                    <li><a href="#"><FaAngleRight />Payment Partners</a></li>
                    {/*<li><a href="#how-to-return-a-product"><FaAngleRight />How to return a Product</a></li>*/}
                    <li>
                      <Link href={"/help/customer-help-center?cat=account-management&subCat=my-account"}>
                        <a><FaAngleRight />How to return a Product</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3} className="py-2 py-sm-0">
                <div className="single-footer mb-2 mb-lg-0 text-center text-sm-start">
                  <h5>Earn Money with Radimart.com</h5>
                  <div className="row">
                    <div className="col-12 col-lg-8">
                      <hr />
                    </div>
                  </div>
                  <ul className="links-list list-unstyled pl-0 mb-0">
                    <li><a href="#become-business-partner"><FaAngleRight />Become a Business Partner</a></li>
                    <li><a href="#become-digital-marketer"><FaAngleRight />Become a Digital Marketer</a></li>
                    <li><a href="#become-sales-consultant"><FaAngleRight />Become a Sales Consultant</a></li>
                    <li><a href="#become-service-provider"><FaAngleRight />Become a Service Provider</a></li>
                    <li><a href="#promote-your-ad"><FaAngleRight />Promote Your Ad</a></li>
                  </ul>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3} className="py-2 py-sm-0">
                <div className="single-footer mb-2 mb-lg-0 text-center text-sm-start">
                  <h5>Corporate Office</h5>
                  <div className="row">
                    <div className="col-12 col-lg-8">
                      <hr />
                    </div>
                  </div>
                  <ul className="contact-list list-unstyled  pl-0 mb-0">
                    <li>
                      <FaMapMarkerAlt />
                      <span>
                        Shah Ali Tower (6th &amp; 7th Floor) 33, Karwan Bazar,
                        Dhaka, Bangladesh
                      </span>
                    </li>
                    <li>
                      <FaPhoneAlt />
                      <span dir="ltr">01611999900</span>
                    </li>
                    <li>
                      <FaRegEnvelope />
                      <span>
                        {" "}
                        <a href="mailto:contact@radimart.com">
                          contact@radimart.com
                        </a>{" "}
                      </span>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3} className="py-2 py-sm-0">
                <div className="footer-block">
                  <div className="single-footer mb-2 mb-lg-0 single-footer-left text-center text-sm-start">
                    <h5>Our Services</h5>
                    <div className="row">
                      <div className="col-12 col-lg-8">
                        <hr />
                      </div>
                    </div>
                    <ul className="links-list list-unstyled pl-0 mb-0">
                      <li><a href="https://radimart.com"><FaAngleRight />Home</a></li>
                      <li><a href="https://radimart.com/shop"><FaAngleRight />Shop</a></li>
                      <li><a href="https://radimart.com/orders"><FaAngleRight />Orders</a></li>
                      <li><a href="https://radimart.com/viewcart"><FaAngleRight />Shopping Cart</a></li>
                      <li><a href="https://radimart.com/wishlist"><FaAngleRight />Wishlist</a></li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3} className="py-2 py-sm-0">
                <div className="single-footer mb-2 mb-lg-0 single-footer-right text-center text-sm-start">
                  <h5>Information</h5>
                  <div className="row">
                    <div className="col-12 col-lg-8">
                      <hr />
                    </div>
                  </div>
                  <ul className="links-list list-unstyled pl-0 mb-0">
                    <li>
                      <Link href="/contact-us">
                        <a><FaAngleRight />Contact Us</a>
                      </Link>
                    </li>
                    {/*<li><a href="#contact"><FaAngleRight />Contact Us</a></li>*/}
                  </ul>
                </div>
              </Col>
              <Col xs={12} sm={6} md={4} lg={3} className="py-2 py-sm-0">
                <div className="single-footer mb-2 mb-lg-0 text-center text-sm-start">
                  <div className="socials">
                    <h5>Follow Us</h5>
                    <div className="row">
                      <div className="col-12 col-lg-8">
                        <hr />
                      </div>
                    </div>
                    <Nav as="ul" className="social-list pb-2 justify-content-center justify-content-sm-start">
                      <Nav.Item as="li">
                        <Nav.Link href="https://www.facebook.com/radimart" className="p-0">
                          <FaFacebookF />
                        </Nav.Link>
                      </Nav.Item>

                      <Nav.Item as="li">
                        <Nav.Link href="https://www.twitter.com/radimart" className="p-0">
                          <FaTwitter />
                        </Nav.Link>
                      </Nav.Item>

                      <Nav.Item as="li">
                        <Nav.Link href="https://www.youtube.com/radimart" className="p-0">
                          <FaYoutube />
                        </Nav.Link>
                      </Nav.Item>

                      <Nav.Item as="li">
                        <Nav.Link href="https://www.instagram.com/radimart" className="p-0">
                          <FaInstagram />
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <div className="footer-image pt-3">
                      <h5>We accepts</h5>
                      <div className="row">
                        <div className="col-12 col-lg-8">
                          <hr />
                        </div>
                      </div>
                      <Image src={payments} alt="We accepts payment method" width={260} height={20} layout="responsive" priority/>
                      {/*<img*/}
                      {/*  className="img-fluid"*/}
                      {/*  src={payments.src}*/}
                      {/*/>*/}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container fluid className="footer-bottom py-2">
          <Container>
            <div className="row align-items-center">
              <div className="col-12">
                <p className="mb-0 copy_right text-center text-light">
                  &copy; Radimart.com {exploreCopyRightYear} | Powered By :{" "}
                  <Link href="https://radissonbd.com">
                    <a className="text-decoration-underline" target="_blank">
                      Radisson Digital Technologies Ltd.
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </Container>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
