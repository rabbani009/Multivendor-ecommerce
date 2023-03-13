import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";

import { useUserContext } from "../../store/context/userContext";
import { useCartContext } from "../../store/context/cartContext";
import { useWishlistContext } from "../../store/context/wishlistContext";
import { Toastify } from "../ui/modules/alert/toastify";

import { addWishlist } from "../../lib/api/wish-list";

const CartButtons = (props) => {
  const router = useRouter()

  // Context
  const { myToken } = useUserContext();
  const {addToCart} = useCartContext()
  const {addToWishlist} = useWishlistContext()

  const {select, product, totalItem, price, stock} = props
  const {productId, skuId, shortDescription, productPrice, discountPrice, quantity, mainImage, productAttributes, title} = product
  
  const [isBookList, setIsBookList] = useState(false);

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
    <div className="cart-btn-wrapper py-2">
      <div className="cart-btn-body d-flex align-items-center">
        <div className="cart-btn-item me-2">
          <Button size="lg" variant="primary" className="cart-btn px-3 py-1">
            Buy Now
          </Button>
        </div>

        <div className="cart-btn-item me-2">
          <Button
            size="lg"
            variant="outline-primary"
            className="cart-btn px-3 py-1"
            onClick={() => {
              addToCart(productId, skuId, title, price, quantity, mainImage, select, totalItem )
              router.push('/cart')
            }}
            disabled={stock === 0}
          >
            Add to Cart <FaShoppingCart />{" "}
          </Button>
        </div>

        <div className="cart-btn-item">
          <Button
            size="md"
            variant="outline-primary"
            className="cart-btn"
            onClick={() => wishlistHandler(productId)}
          >
            {isBookList ? <FaHeart /> : <FaRegHeart />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartButtons;
