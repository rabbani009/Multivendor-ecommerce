import React from "react";
import Image from 'next/image'

import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import MegaMenu from "../../header/navBar/subNav/mega-menu";

// install Swiper modules
SwiperCore.use([Autoplay]);

const BannerSlider = (props) => {
  const { slider, menus } = props;

  if (!slider || slider.length === 0) return null;
  const { content: slidersContent } = slider[0];

  return (
    <section className="banner-section pb-2 pb-md-3">
      <Container>
        <Row className="g-0 overflow-hidden">
          <Col xl={2} className="d-none d-xl-block">
            <MegaMenu menus={menus} />
          </Col>
          <Col lg={12} xl={10}>
            <Swiper
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                loop={true}
                slidesPerView={1}
            >
              {
                slidersContent.map((sliderItem, index) => {
                  const { imgUrl: image, title } = sliderItem;

                  return (
                      <SwiperSlide key={index}>
                        <Image
                            src={`${image}_930x410.png`}
                            alt={title}
                            width={930}
                            height={410}
                            layout="responsive"
                            className="d-block w-100"
                            placeholder="blur"
                            blurDataURL={image}
                        />
                      </SwiperSlide>
                  );
                })}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BannerSlider;
