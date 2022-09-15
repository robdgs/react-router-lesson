import React from 'react';
import {Link} from 'react-router-dom';
import styles from './meal-list-item.module.scss';

export const MealListItem = (props) => {
  const {meal = {}, categoryName = ''} = props;

  return (
      <li className={styles['MealListItem']}>
        <div className={styles['thumbnail-wrapper']}>
          <img
              className={styles.thumbnail}
              src={meal.strMealThumb}
              alt={`preview of ${meal.strCategory} recipe`}
          />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{meal.strMeal}</h3>
        </div>
        <Link to={`/catalogo/${categoryName}/${meal.strMeal}`}
              title={`naviga sul catalogo ${meal.strMeal}`}
              className={styles.link}
        >
          {meal.strMeal}
        </Link>
      </li>
  );
};
