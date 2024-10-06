import { useEffect, useState } from "react";

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
        return <li key={item.id}>{item.name}</li>;
      })}
    </ul>
  );
};
export default Meals;
