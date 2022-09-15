import React from 'react';
import { Link } from 'react-router-dom';
import styles from './category-list-item.module.scss';

export const CategoryListItem = (props) => {
  const { category } = props;

  return (
    <li className={styles['CategoryListItem']}>
      <div className={styles['thumbnail-wrapper']}>
        <img
          className={styles.thumbnail}
          src={category.strCategoryThumb}
          alt={`preview of ${category.strCategory} category`}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{category.strCategory}</h3>
        <p className={styles.description}>{category.strCategoryDescription}</p>
      </div>
      <Link
        to={`/catalogo/${category.strCategory}`}
        title={`naviga sul catalogo ${category.strCategory}`}
        className={styles.link}
      >
        {category.strCategory}
      </Link>
    </li>
  );
};
