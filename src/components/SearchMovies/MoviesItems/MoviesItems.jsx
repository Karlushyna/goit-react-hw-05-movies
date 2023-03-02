import {React, memo} from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './movies-items.module.css';

const MoviesItems = ({ movies }) => {

  const location = useLocation();
  return movies.map(({ id, name, title }) => {
    return (
      <Link className={styles.link} key={id} to={`/movies/${id}`} state={{from: location}}>
        <li className={styles.list} >
          <h2 className={styles.title}>{name || title}</h2>
        </li>
      </Link>
    );
  });
};

export default memo(MoviesItems);
