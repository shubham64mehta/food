import { useReducer, createContext } from "react";

const CartContext = createContext({
  items: [],
  showCartModal: false,
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existingCartItemIndex = state.items.findIndex((item) => {
      item.id === action.item.id;
    });
    const updatedItems = [...state.items];
    if (existingCartItemIndex > -1) {
      const updatedItem = {
        ...state.items[existingCartItemIndex],
        quantity: state.items[existingCartItemIndex] + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    return {
      ...state,
      items: updatedItems,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex((item) => {
      item.id === action.id;
    });
    const updatedItems = [...state.items];
    const existingCartItem = state.items[existingCartItemIndex];
    if (existingCartItem.quantity === 1) {
      updatedItems.splice(existingCartItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      ...state,
      items: updatedItems,
    };
  }
  return state;
}

export function CartContextProvider({ children }) {
  const [cart, cartDispatch] = useReducer(cartReducer, {
    items: [],
  });
  const cartContext = {
    items: cart.items,
    showCartModal: false,
    addItem,
    removeItem,
  };

  function addItem(item) {
    cartDispatch({ item, type: "ADD_ITEM" });
  }

  function removeItem(id) {
    cartDispatch({ id, type: "REMOVE_ITEM" });
  }
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
