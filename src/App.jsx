import "../src/App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from '../src/components/navBar';
import Tabla from '../src/components/tabla';
import CrearYBorrar from '../src/components/crearYborrar';
import VerTabla from '../src/components/verTabla';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/verTabla" />} /> 
          <Route path="/verTabla" element={<VerTabla />} />
          <Route path="/sugerencias" element={<Tabla />} />
          <Route path="/crear-y-borrar" element={<CrearYBorrar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
