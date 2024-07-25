

import { Link } from 'react-router-dom';
import '../components/navBar'; 

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/ver-Tabla" className="navbar-link">Tabla</Link></li>
        <li className="navbar-item"><Link to="/crear-y-borrar" className="navbar-link">Crear y Borrar</Link></li>
        <li className="navbar-item"><Link to="/Sugerencias" className="navbar-link">Sugerencias</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
