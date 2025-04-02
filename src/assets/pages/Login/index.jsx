import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import styles from './styles.module.css';

const Login = () => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    navigate('/search'); 
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Findt</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
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
          <button type="submit" className={styles.button}>login</button>
        </form>
      </div>
  );
};

export default Login;
