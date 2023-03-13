import { useRouter } from "next/router";
import {Button} from "react-bootstrap";

import Swal from "sweetalert2";

import { placeOrder } from "../../lib/api/orders";
import { useCartContext } from "../../store/context/cartContext"
import { useUserContext } from "../../store/context/userContext";

const CartTotal = () => {
  const router = useRouter()
  const {token} = useUserContext()
  const { total_amount, shipping_fee, cart, clearCart } = useCartContext();

    const handlePlaceOrder = async () => {

      // Push shipping page
      if (router.pathname === "/cart") {
        router.push("/shipping")
      }

      // Place order api

      if (router.pathname === "/shipping") {
        const placeOrderRes = await placeOrder(token, cart)
        if (placeOrderRes.status === 200) {
          const {success, data, message} = placeOrderRes.data
          if (success) {
            // Do something
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: "Successfully order submitted.",
              showConfirmButton: false,
              timer: 1500
            })

            // console.log('check cart-summary...', total_amount, shipping_fee, cart, clearCart)

            router.push('/order')

            // Clear cart when successfully place order...
            clearCart()
          }
        }
      }
      
    }

    return (
        <div className="cart-totals d-flex justify-content-end bg-light">
        <article className={router.pathname === "/cart" ? "px-5 py-4 border rounded-1" : "px-5 py-4 rounded-1"}>
           <div>
             <h5>
            subtotal : <span>৳{total_amount}</span>
          </h5>
          <p>
            shipping fee: <span>৳{shipping_fee}</span>
          </p>
          <hr />
          <h4 className="my-3">
            order total: <span>৳{total_amount + shipping_fee}</span>
          </h4>
           </div>
          <div className="text-end">
          <Button variant="outline-warning" onClick={()=> {
            handlePlaceOrder()
          }}>{ router.pathname === "/cart" ? 'Checkout' : 'Place Order'}</Button>
        </div>
        </article>
        </div>
    )
}

export default CartTotal