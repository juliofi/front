import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './assets/pages/Login';
import Search from './assets/pages/Search';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
