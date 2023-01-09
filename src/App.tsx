import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Private } from './pages/Private';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Testando cabeçalho</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Private">Privado</Link>

        </nav>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Private" element={<Private />} />
      </Routes>

    </div>
  );
}

export default App;
