
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '48px 16px' }}>
      <h2 style={{ fontSize: '48px', marginBottom: '8px' }}>404</h2>
      <p style={{ fontSize: '18px', color: '#64748b', marginBottom: '24px' }}>
        Oups ! Cette page n'existe pas.
      </p>
      <Link
        to="/"
        style={{
          display: 'inline-block',
          padding: '10px 24px',
          backgroundColor: '#4f46e5',
          color: 'white',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 600,
        }}
      >
        Retour à l'accueil
      </Link>
    </div>
  );
}

export default NotFound;