import React from 'react';
import { StyledHome } from '../styled-components/components';
import { Link } from  'react-router-dom';
import './home.css';

const imgCarousel = {
  width: 560
};
const transbox ={
  margin: 30,
  backgroundColor: '#4a4646',
  border: '1 solid black',
  opacity: 0.7
}
const colorA = {
  color:'#FFF',
  marginRight: 10 
}

export default function Home() {
  return(
    <>
<div>
  <div className="cd-section cd-section--bg-fixed">
    <div className="recuadro">
      <p>Alcanza todas tus metas, que nada te detenga.</p>
      <p className="link-menor"><Link to="/signup" className="btn-regis">Regístrate aquí</Link></p>
    </div>
  </div>
</div>


<div className='titulo-funciona'>
<h1>¿Cómo funciona?</h1>
</div>
<div className="funciona">
  <div className="instrucciones">
    <img src='https://previews.123rf.com/images/apinan/apinan1610/apinan161000023/67247674-conexi%C3%B3n-de-red-social-para-el-concepto-de-fondo-de-negocios-en-l%C3%ADnea.jpg' alt="img"/>
    <div className="text-funciona">
      <p>
        Conectamos a personas que necesitan pagar sus estudios con personas que buscan invertir su dinero.
      </p>
    </div>
  </div>
  <div className="instrucciones">
    <div className="text-funciona flex-item">
      <p>
        Crea un proyecto en donde especifiques el programa que te gustaría estudiar
      </p>
    </div>
    <img src='https://res.cloudinary.com/djgqc9rrx/image/upload/v1576649706/inCourse/study_w1kjfm.svg' alt="img"/>
  </div>
  <div className="instrucciones">
    <img src='https://res.cloudinary.com/djgqc9rrx/image/upload/v1576649706/inCourse/study2_ykknzz.png' alt="img"  />
    <div className="text-funciona ">
      <p>
        Cuéntanos tu experiencia y sigue conquistando tus metas.
      </p>
    </div>
  </div>
</div>


  <StyledHome>
    <div className="encabezado">
        <p>
          ¡Ayuda alguién a cumplir sus sueños!
        </p>
    </div>
    <div className= "botones">
    <Link to="/signup">Regístrate</Link>
    <Link to="/login">Entra</Link>
    </div>
 
  </StyledHome>

  
  <div className="los-numeros">
    <div className="numeros-card">
      <img src='https://res.cloudinary.com/djgqc9rrx/image/upload/v1576657701/inCourse/usr_t7fhmx.png' alt='numeros'/>
      <p>El numero de usuarios va creciendo</p>
    </div>
    <div  className="numeros-card">
      <img src='https://res.cloudinary.com/djgqc9rrx/image/upload/v1576657692/inCourse/confianza-png-4_ee11co.png' alt='numeros'/>
      <p>Brinda apoyo a quien lo necesita</p>
    </div>
    <div  className="numeros-card">
      <img src='https://res.cloudinary.com/djgqc9rrx/image/upload/v1576657889/inCourse/sales_ffytbg.png' alt='numeros'/>
      <p>Haz crecer tu dinero </p>
    </div>
  </div>

  <div className="mid-logo">
    <img src='https://res.cloudinary.com/djgqc9rrx/image/upload/v1576573185/inCourse/Incourse-logo_khauti.png' alt='' />
  </div>

  <div className="rendimiento">
    <p>Ofrecemos un rendimiento que va del 3.5% al 4.2% (en función del promedio del alumno) anual, en plazos de hasta 4 años</p>
  </div>


  <div className="testimonios">
    <div className="card-testimonio">
      <img src="https://res.cloudinary.com/djgqc9rrx/image/upload/v1576723494/inCourse/WhatsApp_Image_2019-12-18_at_8.20.29_PM_ljeg4o.jpg"  alt="graduados"/>
      <div className="cita"><q>Gracias a In-course pude cumplir mi sueño de convertirme en diseñadora, ahora mis trajes de baño son de los más vendidos.</q> <small>-Erika</small></div>
    </div>
    <div className="card-testimonio">
      <img src="https://res.cloudinary.com/djgqc9rrx/image/upload/v1576734219/inCourse/WhatsApp_Image_2019-12-18_at_9.17.42_PM_uohivz.jpg"  alt="graduados"/>
      <div className="cita"><q>Al perder mi beca me sentí perdida, no tenía como pagar la uni, hasta que encontré In-course y ahora soy ingeniera.</q> <small>-Melisa</small></div>
    </div>
    <div className="card-testimonio">
      <img src="https://res.cloudinary.com/djgqc9rrx/image/upload/v1576734512/inCourse/grad_tgocuz.jpg"  alt="graduados"/>
      <div className="cita"><q>Por un momento creí que no lograría estudiar una carrera, ahora voy por la maestría. Gracias In-course</q> <small>-Pablo</small></div>
    </div>
  </div>
    </>
  )
}