import React from 'react';
import {MealListItem} from "../meal-list-item";

export const MealList = (props) => {
  const {meals = [], categoryName = ''} = props;

  return (
      <section className="MealList">
        <ul>
          {meals.map((meal) => (
              <MealListItem key={meal.idMeal}
                            meal={meal}
                            categoryName={categoryName}
              />
          ))}
        </ul>
      </section>
  );
};
