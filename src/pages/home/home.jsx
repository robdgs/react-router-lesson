// import styles from './home.module.scss';

import React from 'react';
import { ENDPOINTS } from '../../utils/api/endpoints.js';
import { useFetch } from '../../utils/api/use-fetch.js';
import { CategoryList } from '../../components/category-list/index.js';

export const Home = () => {
  const { data, loading, error } = useFetch(ENDPOINTS.CATEGORIES);

  if (loading) {
    return 'Loading...';
  }

  return (
    <div>
      <h1>Home</h1>
      {data ? (
        <CategoryList categories={data?.categories ?? []} />
      ) : (
        'Si è verificato un errore!'
      )}
    </div>
  );
};

export default Home;
