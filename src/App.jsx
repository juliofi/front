import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './assets/pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* Adicione mais rotas aqui conforme necessário */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
