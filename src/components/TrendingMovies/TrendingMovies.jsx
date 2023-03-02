import { useState, useEffect } from 'react';
import styles from './trending-movies.module.css'

import { trendingFilms } from "components/services/movies-api"

import MoviesList from "components/SearchMovies/MoviesList/MoviesList";


function TrendingMovies () {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {

  const fetchPosts = async () => {
    try {
      const data = await trendingFilms();

      setMovies(data.results);

    } catch (error) {
      setError(error.message);
    }
  };

  fetchPosts();


  }, []);

  
  return (
    <div>
      <MoviesList movies={movies} />
      {error && <h2 className={styles.title}>{error}</h2>}
    </div>
  );
}

export default TrendingMovies;