import React from 'react';
import projects from '../data/projects';

export default function Projects() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Mis Proyectos</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '20px' }}>
        {projects.map((project) => (
          <div key={project.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', width: '250px' }}>
            <img src={project.image} alt={project.name} style={{ width: '100%', borderRadius: '4px' }} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>
              Ver repositorio
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}