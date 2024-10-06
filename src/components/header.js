import logoimg from "../assets/logo.jpg";
import Button from "./UI/button.js";
const Header = () => {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoimg} alt="food image"></img>
        <h1>Food</h1>
      </div>
      <nav>
        <Button textOnly={true}>Cart(0)</Button>
      </nav>
    </header>
  );
};

export default Header;
