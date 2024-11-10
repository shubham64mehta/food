import { useContext, useState } from "react";
import Modal from "./UI/modal.js";
import CartContext from "../cart/cartcontext.js";
import currencyFormatter from "../util/formatter.js";
import Input from "./UI/input.js";
import Button from "./UI/button.js";
import UserProgressContext from "../cart/userprogresscontext.js";
import Error from "./error.js";
import useHttp from "../hook/useHttp.js";

const requestConfig = {
  method: "POSt",
  headers: {
    "Content-Type": "application/json",
  },
};

const Checkout = () => {
  const cartCtx = useContext(CartContext);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState("");
  const userProgressCtx = useContext(UserProgressContext);

  //   const { data, error, isLoading, sendRequest } = useHttp(
  //     "http://localhost:3000/orders",
  //     requestConfig
  //   );
  const cartTotalPrice = cartCtx.items.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  let action = (
    <>
      <Button type="button" textOnly={true} onClick={closeHandler}>
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );

  if (isLoading) action = <p>Submitting the data...</p>;

  if (error)
    <Error title="Error Occuered while checking out" message={error}></Error>;
  function closeHandler() {
    userProgressCtx.hideCheckout();
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsloading(true);
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    // sendRequest({
    //   order: {
    //     items: cartCtx.items,
    //     customer: data,
    //   },
    // });
    const response = await fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: data,
        },
      }),
    });
    const resData = await response.json();
    if (!response.ok) setError(resData);
    setIsloading(false);
  }

  return (
    <Modal
      open={userProgressCtx.progress === "checkout"}
      onclose={closeHandler}
    >
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotalPrice)}</p>
        <Input label="Full Name" type="text" id="name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        <p className="modal-action">{action}</p>
      </form>
    </Modal>
  );
};
export default Checkout;
