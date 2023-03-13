import { Container } from "react-bootstrap";

import { useCartContext } from "../../store/context/cartContext";
import CartContent from "../../components/cart/cart-content";

const CartPage = () => {
  const { cart, clearCart } = useCartContext();

  if (cart.length === 0) return <div className="py-5 text-center">No item found</div>;
  return (
    <div className="cart-page page py-3">
      <section className="cart-page page cart-page-section page-section py-4 bg-light">
        <Container>
          <CartContent cart={cart} clearCart={clearCart}/>
        </Container>
      </section>
    </div>
  );
};

// export default withAuth(CartPage);
export default CartPage;
