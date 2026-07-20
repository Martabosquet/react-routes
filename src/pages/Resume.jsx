import React from 'react';
import { studies, experiences } from '../data/resume';

export default function Resume() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Mi Currículum</h2>
      
      <section style={{ marginBottom: '30px' }}>
        <h3>Experiencia Laboral</h3>
        <ul>
          {experiences.map((exp) => (
            <li key={exp.id} style={{ marginBottom: '10px' }}>
              <strong>{exp.title}</strong> en <em>{exp.company}</em> ({exp.date})
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Educación y Estudios</h3>
        <ul>
          {studies.map((study) => (
            <li key={study.id} style={{ marginBottom: '10px' }}>
              <strong>{study.title}</strong> - {study.institution} ({study.date})
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}