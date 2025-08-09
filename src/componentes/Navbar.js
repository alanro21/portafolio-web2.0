import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  // Función para cerrar menú al hacer click en un link
  const closeMenu = () => {
    setMenuOpen(false);
  }

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-logo'>
          <h1>Alan Rodriguez Agostini</h1>
          <p>Versatil | Confiable</p>
        </div>

        <div className='navbar-toggle' onClick={toggleMenu}>
          ☰
        </div>

        <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/" className='nav-link' onClick={closeMenu}>Inicio</Link></li>
          <li><Link to="/sobre-mi" className='nav-link' onClick={closeMenu}>Sobre Mi</Link></li>
          {/*<li><Link to="/habilidad" className='nav-link' onClick={closeMenu}>Habilidad</Link></li>*/}
          {/*<li><Link to="/proyectos" className='nav-link' onClick={closeMenu}>Proyectos</Link></li>*/}
          <li><Link to="/contactos" className='nav-link' onClick={closeMenu}>Contactos</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;


