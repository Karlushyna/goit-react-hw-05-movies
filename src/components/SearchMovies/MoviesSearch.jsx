import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'components/services/movies-api';
import styles from './search-movies.module.css';

import SearchBar from './SearchBar/SearchBar';
import MoviesList from './MoviesList/MoviesList';
import Loader from './Loader/Loader';
import Button from './Button/Button';

function MoviesSearch () {
  const [movies, setMovies] = useState([]);
  const [total, setTotal] = useState(0);
  const [preSearch, setPreSearch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  const page = searchParams.get('page');

  const loadMore = () => {
    setSearchParams({ search, page: Number(page) + 1 });
  };

  const searchInput = searchMovies => {
    if (search === searchMovies) {
      return;
    }
    setSearchParams({ search: searchMovies, page: 1 });

    setMovies([]);
  };

  useEffect(() => {

    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await searchMovies(search, page);

        setMovies(movies => [...movies, ...data.results]);
        setTotal(data.total_results);
        setPreSearch(true);


      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if(search) {
      
      fetchPosts();

      document.querySelector('form').reset();
    }
  }, [search, page]);

  const totalPage = Math.floor(total / 20);

  return (
    <div className={styles.search}>
      <SearchBar onSubmit={searchInput} />
      <MoviesList movies={movies} />
      {total === 0 && preSearch && (
        <>
          <h2 className={styles.message}>Not found</h2>

        </>
      )}
      {error && <h2 className={styles.title}>{error}</h2>}
      {loading && <Loader text="Loading..." />}

      {movies.length > 0 && page < totalPage && (
        <Button loader={loadMore} type="button" />
      )}
    </div>
  );
}

export default MoviesSearch;
