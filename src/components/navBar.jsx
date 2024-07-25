import { Link } from 'react-router-dom';
import '../App.css'; 

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/verTabla" className="navbar-link">Tabla</Link></li>
        <li className="navbar-item"><Link to="/crear-y-borrar" className="navbar-link">Crear y Borrar</Link></li>
        <li className="navbar-item"><Link to="/sugerencias" className="navbar-link">Sugerencias</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
