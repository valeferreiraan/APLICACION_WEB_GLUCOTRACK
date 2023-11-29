
import './HealthTips.css'


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
  {
    id: 4,
    title: "Monitoreo regular",
    content: "Realiza un monitoreo regular de tus niveles de glucosa para mantener un control constante de tu salud."
  },
  {
    id: 5,
    title: "Cuidado de los pies",
    content: "Examina tus pies diariamente en busca de cortaduras, llagas o irritaciones. La diabetes puede afectar la circulación y la sensibilidad en los pies."
  },
  {
    id: 6,
    title: "Control del estrés",
    content: "Gestiona el estrés a través de técnicas como la meditación, el yoga o la respiración profunda. El estrés puede afectar los niveles de glucosa en sangre."
  },
  {
    id: 7,
    title: "Exámenes médicos regulares",
    content: "Realiza exámenes médicos regulares para monitorear tu salud en general y detectar cualquier problema a tiempo."
  },
  {
    id: 8,
    title: "Descanso adecuado",
    content: "Asegúrate de tener un descanso adecuado. El sueño insuficiente puede afectar negativamente la regulación del azúcar en sangre."
  },
  {
    id: 9,
    title: "Comunicación con el médico",
    content: "Mantén una comunicación abierta con tu médico para discutir cualquier preocupación o cambio en tu condición. Un buen seguimiento médico es clave."
  }
];

const HealthTips = () => {
  return (
    <div className='containerTips'>
      {blogPosts.map((post) => (
        <div key={post.id} className='cardTip'>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default HealthTips;
