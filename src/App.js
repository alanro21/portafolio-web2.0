import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Inicio from './paginas/inicio';
import SobreMi from './paginas/sobreMi';
import Contactos from './paginas/contactos';
import Navbar from './componentes/Navbar';
import './App.css';

function App() {
  return (
    <BrowserRouter basename='/portafolio-web2.0'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to="/inicio"/>}/>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
        {/*<Route path="/habilidad" element={<Habilidad />} />*/}
        {/*<Route path="/proyectos" element={<Proyectos />} />*/}
        <Route path="/contactos" element={<Contactos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
