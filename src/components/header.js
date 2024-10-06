import logoimg from "../assets/logo.jpg";
const Header = () => {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoimg} alt="food image"></img>
        <h1>Food</h1>
      </div>
      <nav>
        <button>cart(0)</button>
      </nav>
    </header>
  );
};

export default Header;
