import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './cast.module.css';

import { movieCast } from 'components/services/movies-api';


import CastList from './CastList';

const Cast = () => {
  const [cast, setCast] = useState();

  const { id } = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const results = await movieCast(id);
        setCast(results.cast);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };
    fetchPosts();
  }, [id]);

  if (cast) {

    return (

        <ul className={styles.container}>
          <CastList cast={cast} />
        </ul>

    );
  }
};

export default Cast;
