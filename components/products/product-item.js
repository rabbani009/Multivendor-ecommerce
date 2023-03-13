import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from 'next/image'

import { Card, Col, Modal } from "react-bootstrap";
import { FaEye, FaShoppingCart, FaRegHeart } from "react-icons/fa";

import QuickView from "./quick-view";
import Price from "./Price";
import ProductStar from "../ui/modules/product-star";
import { Toastify } from "../ui/modules/alert/toastify";

// import { genPrice } from "../ui/gen-price";
// import {addCart} from "../../lib/api/cart";

import { useUserContext } from "../../store/context/userContext";
import { useCartContext } from "../../store/context/cartContext";
import { useWishlistContext } from "../../store/context/wishlistContext";

import { getProductDetails } from "../../lib/api/products";
import { addWishlist } from "../../lib/api/wish-list";

const ProductItem = (props) => {
  // Context
  const { myToken } = useUserContext();
  const { addToCart } = useCartContext()
  const {addToWishlist} = useWishlistContext()

  // product info
  const [productInfo, setProductInfo] = useState({})
  const [show, setShow] = useState(false);
  const router = useRouter();

  const { product, xs=6, sm=4, md=3, xl=2 } = props;
  const {productId, title, productPrice, discountPrice, discountPercentage, slug, mainImage, id, skuId, quantity, ratingCount } = product;
  const [price, setPrice] = useState(discountPrice > 0 ? discountPrice : productPrice)

  const calculateTitle = title.slice(0, 28);

  const handleClose = () => setShow(false);

  const handleShow = () => {
    // Product info api call...
    getProductDetails(slug).then((res)=> {
        const { data, success } = res.data;
        if (success) {
          setProductInfo(data)
          setShow(true)
        }
    }).catch(err => {
        Toastify.fire({
          icon: "error",
          title: "Something went wrong!",
          text: "We are sorry to view products",
        });
    })
  };

  // wishlist handler...
  const wishlistHandler = async(productId) => {
    const addWishlistRes = await addWishlist(myToken, productId)
    if (addWishlistRes.status === 200) {
      const {data, success, message} = addWishlistRes.data
      if (success) {
        // Flash message to user...
        Toastify.fire({
          icon: "success",
          title: "Sweet!",
          text: message,
        });
        // Update to user wishlist...
        addToWishlist( data, success, message)
      } else {
        // Flash message to user...
        Toastify.fire({
          icon: "warning",
          title: "Opps...!",
          text: message,
        });
      }
    } else {
      router.push('/login')
      addToWishlist( [], false, "Sorry, Something went wrong!")
    }
  }

  return (
      <Fragment>
        <Modal {...props}
            className="quick-view"
             size="lg"
             centered
             show={show} onHide={handleClose}>

            <Modal.Header closeButton>
              <Modal.Title>{ calculateTitle.length > 27 ? calculateTitle + "..." : calculateTitle }</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <QuickView productInfo={productInfo}/>
            </Modal.Body>
        </Modal>

        <Col xs={xs} sm={sm} md={md} xl={xl} className="product-item p-1 p-md-2">
            <Card className="text-center text-sm-start border-0">
              <Link href={`/product/${slug}`}>
                <a className="text-decoration-none card-link">
                  <div className="card-img-wrapper mb-1">
                    <Image
                      src={`${mainImage}_164x164.png`}
                      alt={title}
                      width={164}
                      height={164}
                      layout="responsive"
                      placeholder="blur"
                      blurDataURL={mainImage}
                    />
                  </div>
                </a>
              </Link>
              <Card.Body className="p-2">
                <div>
                  <div>
                    <Link href={`/product/${slug}`}>
                      <a className="mb-2 text-decoration-none d-block description text-capitalize text-center text-muted-lg">
                        { calculateTitle.length > 27 ? calculateTitle + "..." : calculateTitle }
                      </a>
                    </Link>
                  </div>
                  <div className="price-section d-flex flex-column align-items-center justify-content-between">
                    <Price price={price} productPrice={productPrice} discountPrice={discountPrice} discountPercent={discountPercentage} />
                    <div className="d-flex align-items-center justify-content-center">
                      <ProductStar stars={ratingCount}/>
                    </div>
                  </div>
                </div>
                <div className="product-hover-item d-flex align-items-center justify-content-around">
                  <div onClick={() => {
                    addToCart(productId, skuId, title, price, quantity, mainImage, {colors: {}, sizes: {}}, 1)
                    router.push('/cart')
                  }} className="product-hover-item-wrapper d-flex align-items-center justify-content-center">
                    <FaShoppingCart/>
                  </div>
                  <div onClick={handleShow} className="product-hover-item-wrapper d-flex align-items-center justify-content-center">
                    <FaEye/>
                  </div>
                  <div onClick={() => wishlistHandler(productId)} className="product-hover-item-wrapper d-flex align-items-center justify-content-center">
                    <FaRegHeart/>
                  </div>
                </div>
              </Card.Body>
            </Card>
        </Col>
      </Fragment>
  );
};

export default ProductItem;
