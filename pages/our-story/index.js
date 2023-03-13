import Image from "next/image";
import Link from "next/link";
import {Col, Container, Row, Card} from "react-bootstrap";

import featuresImage from "../../public/images/pages/features-section-bg.png";
import whatWeDoImage from "../../public/images/pages/radimart-what-do-bg.jpg";
import jomeenImage from "../../public/images/pages/property.jpg";
import bookImage from "../../public/images/pages/books.jpg";
import hireMeImage from "../../public/images/pages/hireme.jpg";
import newsImage from "../../public/images/pages/news.jpg";
import doctorImage from "../../public/images/pages/doctor.jpg";
import beautyImage from "../../public/images/pages/beauty.jpg";
import rlabImage from "../../public/images/pages/rlabedu.jpg";
import eshopImage from "../../public/images/pages/eshope.jpg";
import appsShop from "../../public/images/pages/apps-shop.jpg";

const OurStory = () => {
    return (
        <div className="our-story-page">
            <section className="features-section">
                {/*<div className="features-section-bg"></div>*/}
                <Image src={featuresImage} layout="responsive" alt="Our story"/>
            </section>
            <section className="our-story-content-section py-4">
                <Container>
                    <Row>
                        <Col xs={{ span: 6, offset: 3 }}>
                            <p className="text-justify">DoyalBaba.com is an e-commerce corporation based in Dhaka, Bangladesh that facilitates consumer-to-consumer and business-to-consumer sales through its website. We connect millions of buyers and sellers across the world, empowering people and creating economic opportunity for all. We are building stronger connections between buyers and sellers with product experiences that are fast, mobile, and secure and we are transforming the individual selling experience to help you turn the things you no longer need into cash you can use.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="what-we-do-section pb-4">
                <Container>
                    <Row>
                        <Col xs="6">
                            <div className="image-wrapper">
                                <Image src={whatWeDoImage} layout="responsive" alt="What we do?"/>
                            </div>
                        </Col>
                        <Col xs="6">
                            <div className="what-we-do-content">
                                <h4 className="mb-3">What DoyalBaba Is?</h4>
                                <p>We started small, with a single idea of connecting millions of people and to make people’s life easier, aim to grow over the years into the largest e-commerce portal in the country. Doyalbaba believes the highest importance to associates countrywide. We continue to be a leader in sustainability, corporate philanthropy and employment opportunity. It’s all part of our unwavering commitment to creating opportunities and bringing value to customers and communities around the world.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="categories-section">
                <Container>
                    <Row>
                        <h2 className="text-center my-4">CATEGORIES</h2>
                    </Row>
                    <Row>
                        <Col xs={12} sm={6} md={4} className="my-3">
                            <Card>
                                <Image className="card-img-top" src={jomeenImage} layout="responsive" alt="Jomeen" />
                                <Card.Body>
                                    <Card.Title>JOMEEN.COM</Card.Title>
                                    <Card.Text>
                                        <Link href="http://jomeen.com/">JOMEEN</Link>, is the leading specialist property communication agency with growing customer base of urban to hunting desired places. For last couple of years, it has created the most desirable places where people live, work and play. We invite you to enjoy our website and experience the projects that while always having your interests at heart. We’re here to guide you through your property journey.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={4} className="my-3">
                            <Card>
                                <Image className="card-img-top" src={bookImage} layout="responsive" alt="Bookeshop" />
                                <Card.Body>
                                    <Card.Title>BOOKS SHOP BD</Card.Title>
                                    <Card.Text>
                                        <Link href="https://bookshopbd.com/">BOOKS SHOP BD</Link>, is one of the most popular e-reading communities, free access to digital or digitized content: books, images or audio files. To have the most beautiful book reading interface and a pleasure of reading, you should definitely try “The Readers”. It is focused on showcasing a lot of quality beautifully designed ebooks, the reading edge was developed with that purpose in mind.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={4} className="my-3">
                            <Card>
                                <Image className="card-img-top" src={hireMeImage} layout="responsive" alt="JOBS LINK" />
                                <Card.Body>
                                    <Card.Title>JOBS LINK</Card.Title>
                                    <Card.Text>
                                        <Link href="http://jobslinkbd.com">JOBS LINK</Link>, is a job site where you can find a wide variety of roles. There are millions of job ads on site which is generated from thousands of job boards, company websites, classifieds, and newspapers. “Hire Me/ Career Hub” is the perfect job board for you if you’re looking for work in your desired fields such as Engineering, Sales & Marketing, Banking, Creative, telecoms, computer, IT, finance, and healthcare.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xs={12} sm={6} md={4} className="my-3">
                            <Card>
                                <Image className="card-img-top" src={newsImage} layout="responsive" alt="News network bd" />
                                <Card.Body>
                                    <Card.Title>NEWS NETWORK BD</Card.Title>
                                    <Card.Text>
                                        <Link href="https://newsnetwork-bd.org/">NEWS NETWORK BD</Link>, it pioneered at the dawn of radio and television and continue in the digital age, the biggest online news platform with the destination for local & international news & trusted partner of bringing high-quality journalism to millions of readers around the country. It delivers up-to-the-minute news and information with breaking news,top stories, videos, photos,special reports and exclusive interviews on weather, entertainment, politics and more original content coverage of sports, entertainment, finance, technology and more.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={4} className="my-3">
                            <Card>
                                <Image className="card-img-top" src={doctorImage} layout="responsive" alt="Bookeshop" />
                                <Card.Body>
                                    <Card.Title>MEDICAL SHEBA</Card.Title>
                                    <Card.Text>
                                        <Link href="https://www.shebaonline.org/">MEDICAL SHEBA</Link>, Find a doctor online and get free medical advice for health queries & get a better insight of your medical facilities. The Prescription site is a platform for both, patients and doctors, related to health and digitalisation of health care. From booking appointment online, maintaining digital health records, to getting expert online consultation everything is available with Prescription site.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={4} className="my-3">
                            <Card>
                                <Image className="card-img-top" src={beautyImage} layout="responsive" alt="BEAUTY BEEZ BD" />
                                <Card.Body>
                                    <Card.Title>BEAUTY BEEZ BD</Card.Title>
                                    <Card.Text>
                                        <Link href="http://jobslinkbd.com">BEAUTY BEEZ BD</Link>, makes available online booking for beauty services, the smartest and most convenient way to get the experience like home with unmatched professionalism. Every time you want to book an appointment for a beauty service, just choose from the range of services from your preferred saloon and get pampered in the comfort of expectation. The best part is you can pay for the services through our easy online payment method & so convenient to book appointments 3 days in advance.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xs={12} sm={6} md={4} className="my-3">
                            <Card>
                                <Image className="card-img-top" src={rlabImage} layout="responsive" alt="RLAB" />
                                <Card.Body>
                                    <Card.Title>RLAB</Card.Title>
                                    <Card.Text>
                                        <Link href="http://rlab.radissonbd.com/">RLAB</Link>, Radisson Digital Technologies Limited is a Bangladeshi IT and software solutions company which works in the various domains of software, web development and IT solutions and offers robust high quality solutions for wide range of platforms.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={4} className="my-3">
                            <Card>
                                <Image className="card-img-top" src={eshopImage} layout="responsive" alt="ESHOP" />
                                <Card.Body>
                                    <Card.Title>ESHOP</Card.Title>
                                    <Card.Text>
                                        <Link href="https://www.smarteshopbd.com/">ESHOP</Link>, makes available online booking for beauty services, the smartest and most convenient way to get the experience like home with unmatched professionalism. Every time you want to book an appointment for a beauty service, just choose from the range of services from your preferred saloon and get pampered in the comfort of expectation. The best part is you can pay for the services through our easy online payment method & so convenient to book appointments 3 days in advance.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={4} className="my-3">
                            <Card>
                                <Image className="card-img-top" src={appsShop} layout="responsive" alt="APPS SHOP" />
                                <Card.Body>
                                    <Card.Title>APPS SHOP</Card.Title>
                                    <Card.Text>
                                        <Link href="http://appsshopbd.com/">APPS SHOP</Link>, makes available online booking for beauty services, the smartest and most convenient way to get the experience like home with unmatched professionalism. Every time you want to book an appointment for a beauty service, just choose from the range of services from your preferred saloon and get pampered in the comfort of expectation. The best part is you can pay for the services through our easy online payment method & so convenient to book appointments 3 days in advance.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default OurStory