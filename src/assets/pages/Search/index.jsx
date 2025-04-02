import React from 'react';
import styles from './styles.module.css';

const Search = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Findt</h1>
        <input type="text" className={styles.searchbar} />
      </div>
  );
};

export default Search;
