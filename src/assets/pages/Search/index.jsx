import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

const Search = () => {

  const navigate = useNavigate();

  const [input, setInput] = useState('');
  
  const goHome = () => {
    navigate('/');  
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (input.trim()) {
      navigate(`/search/${input}`); 
    }
  };

  return (
    <div className={styles.container}>
        <h1 onClick={goHome} className={styles.title}>Findt</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={styles.searchbar}
            placeholder="Type and press Enter..."
          />
        </form>
      </div>
  );
};

export default Search;
