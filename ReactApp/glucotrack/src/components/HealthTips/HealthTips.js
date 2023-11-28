// src/components/HealthTips.js
import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'Cómo mantener una dieta equilibrada con diabetes',
    content:
      'Mantener una dieta equilibrada es esencial para controlar la diabetes. Conoce qué alimentos son recomendados y cómo planificar tus comidas.',
  },
  {
    id: 2,
    title: 'Beneficios de la actividad física para personas con diabetes',
    content:
      'La actividad física regular no solo ayuda a controlar los niveles de glucosa, sino que también tiene otros beneficios para la salud de las personas con diabetes.',
  },
  {
    id: 3,
    title: 'Consejos para mantener hidratado con diabetes',
    content:
      'La hidratación es clave para el bienestar de las personas con diabetes. Descubre cuánta agua debes beber y por qué es importante.',
  },
  // Agrega más publicaciones según sea necesario
];

const HealthTips = () => {
  return (
    <div>
      {blogPosts.map((post) => (
        <div key={post.id} className="blog-post">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default HealthTips;
