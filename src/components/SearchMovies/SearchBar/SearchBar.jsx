import { useState} from 'react';
import {ImArrowRight2} from 'react-icons/im';

import styles from './search-bar.module.css';


function SearchBar ({onSubmit}) {
  const [search, setSearch] = useState('')


const handleSubmit = (e) => {
  e.preventDefault();
  if(search.trim() === '') {
    return alert("Enter movie for serch")
  }
  onSubmit(search);
  setSearch('')
}

return (
  <form className={styles.form} onSubmit={handleSubmit}>
    
    <input
      className={styles.input}
      name='input'
      onChange={(e) => setSearch(e.target.value)}
      value={search}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search movies"
/>
<button className={styles.button} type="submit" >
      <span>
        <ImArrowRight2/>
        </span>
    </button>
  </form>
  )
}

export default SearchBar;
