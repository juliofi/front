import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './assets/pages/Login';
import Search from './assets/pages/Search';
import Result from './assets/pages/Result'; 

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:query" element={<Result />} /> {/* rota dinâmica */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;