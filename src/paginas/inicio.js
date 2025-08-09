import React from 'react'
import './inicio.css'
import TypingEffect from '../componentes/TypingEffect';

const inicio = () => {
  return (
    <div className='app-container'>
      <div className='contenedor'>
        <div className='container-imag'>
          <img src={`${process.env.PUBLIC_URL}/img/Foto-Principal.png`} alt='Foto-principal' className='imagen'></img>
        </div>
        <div className='container-discrip'>
          <TypingEffect text='Bienvenido a mi portafolio' speed={25} className='titulo' tag='h1'></TypingEffect>
          <TypingEffect text='Hola, soy Alan Hernan Rodriguez Agostini.
           Este es mi espacio personal donde comparto parte del camino que vengo recorriendo en el mundo de la tecnología. 
           Acá vas a encontrar información sobre mí, mis habilidades, 
           algunos de los proyectos que desarrollé y todo lo que me apasiona construir desde la informática.' speed={29}className='descripcion' tag='p'>
          </TypingEffect>
        </div>
      </div>
      <footer>
          <p>Copyright © 2025</p>
          <p>Alan Rodriguez Agostini - Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default inicio;