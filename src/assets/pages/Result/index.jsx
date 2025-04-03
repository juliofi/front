import React from 'react';
import { useParams } from 'react-router-dom';

const Result = () => {
  const { query } = useParams(); // 
  return <p>{query}</p>;
};

export default Result;