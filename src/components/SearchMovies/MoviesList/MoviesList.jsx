
import React from 'react';
import { memo } from 'react';

import styles from './movies-list.module.css'

import MoviesItems from '../MoviesItems/MoviesItems';

const MoviesList = ({ movies }) => {

    return (
      <div className={styles.search}>
        <ul className={styles.movies}>
          <MoviesItems movies={movies} />
        </ul>
      </div>
    );
};

export default memo(MoviesList);