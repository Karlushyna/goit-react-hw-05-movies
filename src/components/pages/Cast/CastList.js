import styles from './cast.module.css';

const CastList = ({ cast }) => {
  return cast.map(({ id, character, name, profile_path }) => {


  function moviePoster (profile_path) {
  
    return `https://image.tmdb.org/t/p/w500${profile_path}`;
  }

    return (
      <li key={id} className={styles.list}>
        <img className={styles.image} 
        src={moviePoster(profile_path)} 
        alt={name} 
        width='150' height='200' />
        <div className={styles.group}>
        <h3 className={name}>{name}</h3>
        <p className={styles.character}>{character}</p>
        </div>
      </li>
    );
  });
};

export default CastList;
