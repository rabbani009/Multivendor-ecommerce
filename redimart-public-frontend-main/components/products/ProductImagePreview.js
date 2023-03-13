import Image from 'next/image'

import { ListGroup } from "react-bootstrap";
import { GlassMagnifier } from "react-image-magnifiers";

const ProductImagePreview = (props) => {
  const { images, setMain, image } = props;

  return (
    <div className="product-main-img-wrapper py-3">
      <div className="product-img-preview">

          <GlassMagnifier
              magnifierSize="50%"
              imageSrc={`${image}_356x356.png`}
              imageAlt="Example"
              largeImageSrc={`${image}_1200x1200.png`} // Optional
          />
      </div>

      <hr className="my-2" />
      <div className="product-gallery-wrapper">
        <ListGroup
          horizontal
          as="ul"
          className="product-gallery-preview-wrapper overflow-hidden"
        >
          {images &&
              images.map((image, index) => {
              const { smallImage, largeImage } = image;

              return (
                <ListGroup.Item as="li" className="border-0" key={index}>
                  <div className="single-product-gallery-img">
                    <Image
                      className="module-image"
                      onMouseOver={() => setMain(largeImage)}
                      src={`${smallImage}_50x50.png`}
                      width={50}
                      height={50}
                      alt={smallImage}
                      blurDataURL={smallImage}
                      placeholder="blur"
                    />
                  </div>
                </ListGroup.Item>
              );
            })}
        </ListGroup>
      </div>
    </div>
  );
};

export default ProductImagePreview;
