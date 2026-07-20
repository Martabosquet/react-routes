import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

export default function App() {
  return (
    <Router>
      <div>
        {/* Barra de navegación común para toda la aplicación */}
        <nav style={{ padding: '15px', backgroundColor: '#f4f4f4', borderBottom: '1px solid #ddd' }}>
          <ul style={{ display: 'flex', listStyle: 'none', gap: '20px', margin: 0, padding: 0 }}>
            <li>
              <Link to="/" style={{ textDecoration: 'none', fontWeight: 'bold' }}>Inicio</Link>
            </li>
            <li>
              <Link to="/projects" style={{ textDecoration: 'none', fontWeight: 'bold' }}>Proyectos</Link>
            </li>
            <li>
              <Link to="/resume" style={{ textDecoration: 'none', fontWeight: 'bold' }}>Currículum</Link>
            </li>
          </ul>
        </nav>

        {/* Configuración y renderizado de las rutas dinámicas */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}