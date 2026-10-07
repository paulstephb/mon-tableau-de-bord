import { Outlet, NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

function Layout() {
  const { theme } = useTheme();

  // Styles conditionnels selon le thème
  const styles = {
    container: {
      minHeight: '100vh',
      background: theme === 'light' ? '#ffffff' : '#0f172a',
      color: theme === 'light' ? '#1e293b' : '#e2e8f0',
      transition: 'background 0.3s, color 0.3s',
    },
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 20px',
      background: theme === 'light' ? '#f1f5f9' : '#1e293b',
      borderBottom: theme === 'light' ? '1px solid #e2e8f0' : '1px solid #334155',
    },
    link: {
      color: theme === 'light' ? '#3b82f6' : '#60a5fa',
      textDecoration: 'none',
      padding: '6px 12px',
      borderRadius: '6px',
    },
  };

  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <NavLink to="/" style={styles.link}>Dashboard</NavLink>
          <NavLink to="/tasks" style={styles.link}>Tâches</NavLink>
          <NavLink to="/notes" style={styles.link}>Notes</NavLink>
          <NavLink to="/settings" style={styles.link}>Paramètres</NavLink>
        </div>
        <ThemeToggle />
      </nav>
      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;