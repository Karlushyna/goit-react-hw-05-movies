import { movieDetails } from 'components/services/movies-api';
import { useState, useEffect } from 'react';
import { Outlet, Link, useParams, useNavigate, useLocation } from 'react-router-dom';

import styles from './movie-details.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const { id } = useParams();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  useEffect(() => {
    const fetchPosts = async () => {
      try {

        const results = await movieDetails(id);
        setMovie(results);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };
    fetchPosts()
  }, [id]);


  if(movie) {

  const { title, overview, genres, poster_path, vote_average, release_date} = movie;
  
  const date = release_date.slice(0,4);

  const genre = genres.map((genre) => genre.name).join(', ');
  
  function posterImage (poster_path) {

    return `https://image.tmdb.org/t/p/w500${poster_path}`;
  }

  return ( 
    <div className={styles.container}>
      <button className={styles.button} onClick={()=>navigate(from)}>
        Go back </button>
    <div className={styles.gap}>
      <div>
        <img 
        src={posterImage(poster_path)} 
        alt={title}
        width='250' 
        height='350' 
        /></div>
      <div>
        <h2>{title} ({date})</h2>
        <p>Use Score: {vote_average.toFixed(1)}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genre}</p>
      </div>
    </div>
    <h3 className={styles.text}>Additional information</h3>

    <ul className={styles.group}>
      <Link className={styles.link} to='cast' state={{from}} >
        <li className={styles.list}>Cast</li>
      </Link >
      <Link className={styles.link} to='reviews' state={{from}}>
        <li className={styles.list}>Reviews</li>
      </Link >
    </ul>

    <Outlet/>
    </div>
    );
  }
};

export default MovieDetails;
