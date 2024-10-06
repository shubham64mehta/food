import currencyFormatter from "../util/formatter.js";
import Button from "./UI/button.js";

const MealItem = ({ meal, ...props }) => {
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name}></img>
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-action">
          <Button>Add To Cart</Button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;
