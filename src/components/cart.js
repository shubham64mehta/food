import { useContext } from "react";
import Modal from "./UI/modal.js";
import CartContext from "../cart/cartcontext.js";
import currencyFormatter from "../util/formatter.js";
import Button from "./UI/button.js";
import UserProgressContext from "../cart/userprogresscontext.js";
import Cartitem from "./cartitem.js";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const userProgressContext = useContext(UserProgressContext);
  const cartTotalPrice = cartCtx.items.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  function cartCloseHandler() {
    userProgressContext.hideCart();
  }
  return (
    <Modal className="cart" open={userProgressContext.progress === "cart"}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => {
          return (
            <Cartitem
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              onDecrease={() => {
                cartCtx.removeItem(item.id);
              }}
              onIncrease={() => {
                cartCtx.addItem(item);
              }}
            ></Cartitem>
          );
        })}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotalPrice)}</p>
      <p className="modal-actions">
        <Button textOnly={true} onClick={cartCloseHandler}>
          Close
        </Button>
        {cartCtx.items.length > 0 && (
          <Button onClick={cartCloseHandler}>Go To Checkout</Button>
        )}
      </p>
    </Modal>
  );
};

export default Cart;
