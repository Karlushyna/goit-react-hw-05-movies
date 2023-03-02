import React from 'react';
import styles from './button.css'

const Button = ({ loader }) => {
  return (
    <button className={styles.loadButton} onClick={()=>loader()}>
      Load more
    </button>
  );
};

export default Button;