import { CartContextProvider } from "./cart/cartcontext.js";
import { UserProgressContextProvider } from "./cart/userprogresscontext.js";
import Cart from "./components/cart.js";
import Checkout from "./components/checkout.js";
import Header from "./components/header.js";
import Meals from "./components/meals.js";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header></Header>
        <Meals></Meals>
        <Cart></Cart>
        <Checkout></Checkout>
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
