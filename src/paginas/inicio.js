import React from 'react'
import './inicio.css'

const inicio = () => {
  return (
      <div className='contenedor'>
        <div className='container-imag'>
        </div>
        <div className='container-discrip'>
          <div className='titulo'><h1>Bienvenido a mi portafolio</h1></div>
          <p> Descripcion de bienvenida a mi portafolio </p>
        </div>
        <footer>
          <p>Copyright © 2025. Alan Rodriguez Agostini. Todos los derechos reservados.</p>
        </footer>
      </div>
  );
}

export default inicio;