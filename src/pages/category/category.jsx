import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {ENDPOINTS} from '../../utils/api/endpoints';
import {useFetch} from '../../utils/api/use-fetch';
import {MealList} from "../../components/meal-list";

export const Category = () => {
  const params = useParams();
  const {categoryName} = params;

  const {data, loading, error} = useFetch(`${ENDPOINTS.FILTER}?c=${categoryName}`);

  if (loading) {
    return 'Caricamento...';
  }

  if (!(data?.meals?.length)) {
    return 'Not found';
  }

  return (
      <div>
        <MealList categoryName={categoryName} meals={data?.meals}/>
      </div>
  );
};

export default Category;
