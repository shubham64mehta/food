import currencyFormatter from "../util/formatter.js";

const Cartitem = ({ name, quantity, price, onDecrease, onIncrease }) => {
  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} X {currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={onIncrease}>+</button>
      </p>
    </li>
  );
};

export default Cartitem;
