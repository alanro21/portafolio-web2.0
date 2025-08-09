import React from 'react'
import './sobreMi.css'
import TypingEffect from '../componentes/TypingEffect'

const sobreMi = () => {
  return (
    <>
     <div className='contenedor-inicial'>
        <div className='container-imag-1'>
          <img src={`${process.env.PUBLIC_URL}/img/Foto-secundaria.png`} alt='Foto-principal' className='img-s'></img>
        </div>
        <div className='container-info'>
          <div className='info'>
            <TypingEffect text='Me llamo Alan Hernan Rodriguez Agostini, tengo 24 años. 
               Soy estudiante de la carrera Licenciatura en Informatica, una persona responsable y autodidacta, con capacidad
               para adaptarme a nuevas herramientas y metodologia.
               En este momento de mi carrera estoy enfocado en seguir desarrolando habilidades tecnicas en area como el desrrollo fullstack, base de datos y 
               ingeneria de software.
               Mi meta es convertirme en un profesional íntegro, capaz de contribuir de forma significativa en equipos de desarrollo 
               y proyectos tecnológicos que tengan impacto positivo en la sociedad.

               Si querés conocer algunos de mis proyectos y trabajos realizados durante mi carrera, 
               te invito a hacer clic en el botón de abajo para acceder a mi perfil de GitHub.' speed={35}/>
          </div>
          <div className='boton'>
            <a href={`${process.env.PUBLIC_URL}/Currículum vítae (Rodriguez Agostini Alan Hernan).pdf`} download className='boton-cv'>
             <p>Descargar CV</p>
            </a>
            <a href='https://github.com/alanro21' className='boton-git'> <p className='tex'>Github</p> </a>
          </div>
        </div>
     </div>
     <footer className='footer-sobreMi'>
        <p>Copyright © 2025 </p>
        <p>Alan Rodriguez Agostini - Todos los derechos reservados</p>
     </footer>
    </>
      
  )
}

export default sobreMi;