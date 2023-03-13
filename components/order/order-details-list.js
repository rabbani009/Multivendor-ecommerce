import Image from "next/image";
import Link from "next/link";

const OrderDetailsList = ({product}) => {
  // console.log('check product...', product)

  const { attributeId, color, image, price, productId, productTitle, quantity, size, subtotal, slug, vendor } = product;

  const calculateTitle = productTitle.slice(0, 28);


  // return <p>Hello world...</p>

  return (
    <div className="order-item-card my-2">
      <div className="order-item-body d-flex">
        <div className="d-flex pe-2" style={{ flex: "1" }}>
          {/*<Image src={image} alt={productTitle} width={200} height={200} />*/}
          <div>
            <Link href={`${process.env.NEXT_PUBLIC_OWN_BASE_URL}/product/${slug}`}>
              <a>
                {/* <Image src={`${image}_90x90.png`} alt={productTitle} width={90} height={90} /> */}
                <Image src={`${image}_90x90.png`} alt={productTitle} width={90} height={90} />
              </a>
            </Link>
          </div>
          <div className="ps-3">
            <h6 className="mb-0">
                <Link href={`${process.env.NEXT_PUBLIC_OWN_BASE_URL}/product/${slug}`}>
                  <a className="text-info text-decoration-none">
                    {
                      calculateTitle.length > 27 ? calculateTitle + "..." : calculateTitle
                    }
                  </a>
                </Link>
              </h6>
              <div>
                <div>
                  <small className="text-muted">Color: {color}</small>
                </div>
                <div>
                  <small className="text-muted">Size: {size}</small>
                </div>
                <div>
                  <small className="text-muted">Vendor: {vendor || "N/A"}</small>
                </div>
              </div>
          </div>
        </div>
        <div
          className="d-flex justify-content-between ps-2"
          style={{ flex: "1" }}
        >
          <div>
            <p className="mb-0">
              <small>৳ {price}</small>
            </p>
          </div>
          <div>
            <p className="mb-0">
              <span className="text-muted">Sub: </span>
              <small>৳ {subtotal}</small>
            </p>
          </div>
          <div>
            <p className="mb-0">
              <span className="text-muted">Qty: </span>
              <small>{quantity}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsList;
