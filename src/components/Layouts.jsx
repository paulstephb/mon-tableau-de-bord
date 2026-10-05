import { Outlet,  } from "react-router-dom";
import Navbar from './Navbar';


function Layout() {
  return (
    <div className="layout">
      <Navbar />

      <main className="content">
        <Outlet />
      </main>

      <footer className="footer">
        <p>Mon Tableau de Bord — 2026</p>
      </footer>
    </div>
  );
}

export default Layout;
