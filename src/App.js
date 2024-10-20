import { CartContextProvider } from "./cart/cartcontext.js";
import Header from "./components/header.js";
import Meals from "./components/meals.js";

function App() {
  return (
    <CartContextProvider>
      <Header></Header>
      <Meals></Meals>
    </CartContextProvider>
  );
}

export default App;
