import React from 'react';
import { StyledHome, ComoFunciona } from '../styled-components/components';
import Carousel  from 'react-bootstrap/Carousel'
import { Link } from  'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './home.css'

const imgCarousel = {minWidth:560};
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

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.up.edu.mx/sites/default/files//up_buho.jpg"
      alt="First slide"
      style={imgCarousel}
    />
    <Carousel.Caption>
      <div style={transbox}>
        <h3>Queremos que cumplas tus sueños</h3>
        <Link exact to="/signup" className="navbar-active" style={colorA}> Regístrate</Link>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://d1dxvryen9goi5.cloudfront.net/wp-content/uploads/2019/03/UNAM1.jpg"
      alt="Third slide"
      style={imgCarousel}
    />

    <Carousel.Caption>
    <div style={transbox}>
      <h3>¿Ya eres miembro?</h3>
      <Link exact to="/login" className="navbar-active" style={colorA}>Entra</Link>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.liderempresarial.com/wp-content/uploads/2017/06/tec-de-mty.jpg"
      alt="Third slide"
      style={imgCarousel}
    />

    <Carousel.Caption>
      <div style={transbox}>
        <h3>Persigue tus sueños, aún es tiempo</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


<div className='titulo-funciona'>
<h1>¿Cómo funciona?</h1>
</div>
<div className="funciona">
  
  <img src='https://res.cloudinary.com/djgqc9rrx/image/upload/v1576649706/inCourse/study_w1kjfm.svg' alt="img"/>
 
  <div className="text-funciona">
    <p>
      Conectamos a personas que necesitan pagar sus estudios con personas que quieren invertir su dinero.
    </p>

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


  <div className="instrucciones">


  </div>


  <div className="logo">
    paps
    <img src='' alt='' />
  </div>

  <div className="los-numeros">
    <div className="numeros-card">
      <img src='https://res.cloudinary.com/djgqc9rrx/image/upload/v1576657701/inCourse/usr_t7fhmx.png' alt='numeros'/>
      <p>El numero de usuarios va creciendo</p>
    </div>
    <div  className="numeros-card">
      <img src='https://res.cloudinary.com/djgqc9rrx/image/upload/v1576657889/inCourse/sales_ffytbg.png' alt='numeros'/>
      <p>Haz crecer tu dinero </p>
    </div>
    <div  className="numeros-card">
      <img src='https://res.cloudinary.com/djgqc9rrx/image/upload/v1576657692/inCourse/confianza-png-4_ee11co.png' alt='numeros'/>
      <p>Brinda apoyo a quien lo necesita</p>
    </div>
  </div>


  <div className="testimonios">
    <div>
      <img src=""  alt="graduados"/>
      <p></p>
    </div>
  </div>
  









    </>
  )
}