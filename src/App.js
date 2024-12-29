import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Juego from '../src/pages/Juego';
import Inicio from '../src/pages/Inicio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Inicio" element={<Inicio/>} />
        <Route path="/Juego" element={<Juego/>} />
        <Route path="/" element={<Inicio/>}/>
      </Routes>
    </Router>
  );
}

export default App;
