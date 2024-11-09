import { useContext } from "react";
import Modal from "./UI/modal";
import CartContext from "../cart/cartcontext";
import currencyFormatter from "../util/formatter";
import Button from "./UI/button";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const cartTotalPrice = cartCtx.items.reduce((total, item) => {
    total + item.quantity * item.price;
  }, 0);
  return (
    <Modal className="cart" open={cartCtx.showCartModal}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => {
          <li key={item.id}>
            {item.name}-{item.quantity}
          </li>;
        })}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotalPrice)}</p>
      <p className="modal-actions">
        <Button textOnly={true}>Close</Button>
        <Button>Go To Checkout</Button>
      </p>
    </Modal>
  );
};

export default Cart;
