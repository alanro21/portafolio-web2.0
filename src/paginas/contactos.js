import React from 'react'
import "./contactos.css"

const contactos = () => {
  return (
     <div className='app-contenedor'>
      <div className='contenedor-principal'>
        <div className='contenedor-2'> <h1 className='titulo-cont'>Contactos</h1>
          <p className='text'>Contáctame para más información en</p>
          <div className='logos'>
            <div className='logo-con-texto'>
              <a href='*' target='_blank' rel='noopener noreferrer'>
                <img src={`${process.env.PUBLIC_URL}/img/Logo-WhatsAapp.png`} alt='' className='logo1'></img>
              </a>
            </div>
            
            <div className='logo-con-texto'>
              <a href='https://www.linkedin.com/in/alanrodriguezagostini/' target='_blank' rel='noopener noreferrer'>
                <img src={`${process.env.PUBLIC_URL}/img/Logo-Linkedln.png`} alt='' className='logo2'></img>
              </a>
            </div>
          </div>
          <p className='text-2'>o sino por e-mail: alanrodriguezagostini71@gmail.com</p>
        </div>
      </div>
      <footer>
          <p>Copyright © 2025</p>
          <p>Alan Rodriguez Agostini - Todos los derechos reservados.</p>
        </footer>
    </div> 
  )
}

export default contactos;