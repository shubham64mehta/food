import { useContext } from "react";
import logoimg from "../assets/logo.jpg";
import Button from "./UI/button.js";
import CartContext from "../cart/cartcontext.js";
const Header = () => {
  const cartcontext = useContext(CartContext);
  const cartItem = cartcontext.items.reduce((totalNoOfItem, item) => {
    return totalNoOfItem + item.quantity;
  }, 0);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoimg} alt="food image"></img>
        <h1>Food</h1>
      </div>
      <nav>
        <Button textOnly={true}>Cart({cartItem})</Button>
      </nav>
    </header>
  );
};

export default Header;
