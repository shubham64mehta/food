import { useEffect, useState } from "react";
import MealItem from "./mealitem.js";

const Meals = () => {
  const [mealsAvailable, setMealsAvailable] = useState([]);
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch("http://localhost:3000/meals");
      if (!response.ok) {
        //..
      }
      const meals = await response.json();
      setMealsAvailable(meals);
    };
    fetchMeals();
  }, []);
  return (
    <ul id="meals">
      {mealsAvailable.map((item) => {
        return <MealItem key={item.id} meal={item}></MealItem>;
      })}
    </ul>
  );
};
export default Meals;
