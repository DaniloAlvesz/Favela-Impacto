import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Brasilia from './pages/Brasilia';
import Curado from './pages/Curado';
import Coque from './pages/Coque';
import AltoDoCristo from './pages/AltoDoCristo';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Brasilia" element={<Brasilia />} />
        <Route path="/Curado" element={<Curado />} />
        <Route path="/Coque" element={<Coque />} />
        <Route path="/AltoDoCristo" element={<AltoDoCristo />} />
      </Routes>
    </Router>
  );
};

export default App;
