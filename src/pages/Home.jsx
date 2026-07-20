import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>¡Bienvenido a mi Portafolio!</h1>
      <p>
        Hola, soy una aprendiz de Desarrolladora Full Stack apasionado por crear aplicaciones web eficientes, 
        escalables y optimizadas con Inteligencia Artificial.
      </p>
      <div style={{ marginTop: '20px' }}>
        <Link to="/projects" style={{ marginRight: '15px' }}>Ver mis Proyectos</Link>
        <Link to="/resume">Ver mi Currículum</Link>
      </div>
    </div>
  );
}