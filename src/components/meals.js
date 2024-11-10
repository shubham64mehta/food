import { useEffect, useState } from "react";
import MealItem from "./mealitem.js";
import useHttp from "../hook/useHttp.js";
import Error from "../components/error.js";

const requestConfig = {};
const Meals = () => {
  const {
    data: mealsAvailable,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);
  if (isLoading) return <p className="center">Fetching meals...</p>;
  if (error) return <Error title="Failed To Fetch" message={error}></Error>;
  return (
    <ul id="meals">
      {mealsAvailable.map((item) => {
        return <MealItem key={item.id} meal={item}></MealItem>;
      })}
    </ul>
  );
};
export default Meals;
