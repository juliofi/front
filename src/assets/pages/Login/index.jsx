import React from 'react';
import styles from './styles.module.css';

const Login = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Findi</h1>
        <form className={styles.form}>
          <input
            type="text"
            className={styles.input}
            placeholder="user"
          />
          <input
            type="password"
            className={styles.input}
            placeholder="password"
          />
          <button className={styles.button}>login</button>
        </form>
      </div>
  );
};

export default Login;
