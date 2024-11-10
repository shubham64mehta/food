import { useContext } from "react";
import logoimg from "../assets/logo.jpg";
import Button from "./UI/button.js";
import CartContext from "../cart/cartcontext.js";
import UserProgressContext from "../cart/userprogresscontext.js";
const Header = () => {
  const cartcontext = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const cartItem = cartcontext.items.reduce((totalNoOfItem, item) => {
    return totalNoOfItem + item.quantity;
  }, 0);

  function cartHandler() {
    userProgressCtx.showCart();
  }
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoimg} alt="food image"></img>
        <h1>Food</h1>
      </div>
      <nav>
        <Button textOnly={true} onClick={cartHandler}>
          Cart({cartItem})
        </Button>
      </nav>
    </header>
  );
};

export default Header;
