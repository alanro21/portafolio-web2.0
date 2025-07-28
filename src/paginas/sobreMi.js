import React from 'react'
import './sobreMi.css'
const sobreMi = () => {
  return (
    <>
     <div className='contenedor-inicial'>
        <div className='container-imag-1'></div>
        <div className='container-info'>
          <div className='info'><p>Descripcion de informacion</p></div>
          <a href={`${process.env.PUBLIC_URL}/Currículum vítae (Rodriguez Agostini Alan Hernan).pdf`} download className='boton-cv'>
             <p>Descargar CV</p>
          </a>
        </div>
     </div>
     <footer>
        <p>Copyright © 2025 </p>
        <p>Alan Rodriguez Agostini - Todos los derechos reservados</p>
     </footer>
    </>
      
  )
}

export default sobreMi;