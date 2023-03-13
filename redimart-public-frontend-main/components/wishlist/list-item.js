import Image from "next/image";
import { useRouter } from "next/router";
import { Button, Card, Col } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import Swal from "sweetalert2";

import { useUserContext } from "../../store/context/userContext";
import { useCartContext } from "../../store/context/cartContext";
import { useWishlistContext } from "../../store/context/wishlistContext";
import { addCart } from "../../lib/api/cart";
import { removeWishlist } from "../../lib/api/wish-list";
import { Toastify } from "../ui/modules/alert/toastify";
import { ToastifyDelete } from "../ui/modules/alert/delete-alert";

const ListItem = (props) => {
  const router = useRouter();
  // Context api...
  const { myToken } = useUserContext();
  const { addToCart } = useCartContext();
  const { removeToWishlist } = useWishlistContext();

  // Props
  const { title, image, quantity, productId, skuId, id, price } = props;

  // Handle add to cart
  // const handleAddToCart = async () => {
  //   const obj = {
  //     skuId,
  //     productId,
  //     quantity,
  //   };
  //   // State and API...
  //   const addCartRes = await addCart(myToken, obj);
  //   if (addCartRes.status === 200) {
  //     const { success, message } = addCartRes.data;
  //     if (success) {
  //       // Add to state...
  //       addToCart(obj);

  //       // Flash message to user...
  //       Toastify.fire({
  //         icon: "success",
  //         text: message,
  //       });
  //     } else {
  //       // Flash message to user...
  //       Toastify.fire({
  //         icon: "error",
  //         text: message,
  //       });
  //     }
  //   } else {
  //     // Flash message to user...
  //     Toastify.fire({
  //       icon: "error",
  //       text: "Something went wrong!",
  //     });
  //   }
  // };

  // Remove product handler...
  const productRemoveHandler = async (productId) => {
    ToastifyDelete.fire({}).then((result) => {
      if (result.isConfirmed) {
        removeToWishlist(productId);
        removeWishlist(myToken, productId);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <Col className="my-2">
      <Card className="py-3 px-4 wishlist-card">
        <Card.Body className="p-0">
          <div className="card-body-item d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <Image src={`${image}_100x100.png`} width={100} height={100} alt={title}/>
              <div className="ms-4">
                <div>
                  <p className="mb-1 text-size-lg">{title}</p>
                  <span className="text-muted">
                    Quantity:{" "}
                    <small className="text-size-sm">
                      {" "}
                      {quantity}
                    </small>
                  </span>
                </div>

                <div className="mt-1">
                  <Button
                    variant="danger"
                    onClick={() => productRemoveHandler(productId)}
                    className="px-1 py-0"
                  >
                    <FaTrash />
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <Button
                variant="outline-warning"
                onClick={() => {
                  addToCart(productId, skuId, title, price, quantity, image, {colors: {}, sizes: {}}, 1)
                  router.push('/cart')
                }}
                className="px-4 py-1"
              >
                <MdAddShoppingCart />
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ListItem;
