import React, { useEffect, useState } from "react";
import {
  getAllEvents
} from "../services/EventService";

/* STATEFUL PARENT COMPONENT */
const FoodList = () => {
  // Variables in the state to hold data
  const [foods, setFoods] = useState([]);

  // UseEffect to run when the page loads to
  // obtain async data and render
  useEffect(() => {


    getAllEvents().then((foods) => {
      console.log(foods);
      setFoods(foods);
    });
  }, []);


  return (
    <div>
        {foods.length > 0 && (
          <ul>
            {foods.map((food, i) => (
              <div >
                <span >
                  <p > {food.get("name")} | {food.get("price")}</p>{" "}
                </span>
              </div>
            ))}
          </ul>
        )}
    </div>
  );
};

export default FoodList;
